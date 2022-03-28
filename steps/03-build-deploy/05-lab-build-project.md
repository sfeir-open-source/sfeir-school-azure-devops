**Azure Pipelines**
---


# Lab - Build Api containers

**Pipeline**
- Créer le fichier build-api-xxx.yml dans la racine
- Ajouter la pipeline dans Azure Devops
- Autoriser les permissions demandées si nécéssaire

**Structure générale**


```
triggers: ...
variables: ...

stages:
- stage: build
  displayName: Build and push stage
  variables: ... si nécéssaire seulement
  jobs: 
  - job: build
    displayName: Build
    pool: 
        vmImage: 'ubuntu-latest'
    steps:
    - ...
    - ...
```
**Variables**

| Name                            | Value                   |
|---------------------------------|-------------------------|
| dockerRegistryServiceConnection | sfeirschools            |
| containerRegistry               | sfeirschools.azurecr.io |
| tags                            | lab05-$(Build.BuildId)  |


---


# **Kotlin**
- Trigger on **master**, path **src/apis/api-kotlin**
- Variables:


    | Name             | Value                                                 |
    |------------------|-------------------------------------------------------|
    | imageRepository  | api-kotlin                                            |
    | workingDirectory | $(Build.SourcesDirectory)/src/apis/api-kotlin         |
    | dockerfilePath   | $(workingDirectory)/Dockerfile                        |
    | GRADLE_USER_HOME | $(Build.SourcesDirectory)/src/apis/api-kotlin/.gradle |


- Tasks: 
    ```
    - task: CacheBeta@0
      inputs:
        key: $(Agent.OS)
        path: $(GRADLE_USER_HOME)
      displayName: 'Gradle: setup build cache'
    ```

    ```
    - task: Gradle@3
      inputs:
        workingDirectory: '$(workingDirectory)'
        gradleWrapperFile: '$(workingDirectory)/gradlew'
        javaHomeOption: 'JDKVersion'
        jdkVersionOption: '1.8'
        jdkArchitectureOption: 'x64'
        publishJUnitResults: true
        tasks: 'check assemble'
    ```

---

# **.net core**
- Trigger on **master**, path **src/apis/api-netcore**
- Variables:

    | Name            | Value                                                     |
    |-----------------|-----------------------------------------------------------|
    | imageRepository | api-netcore                                               |
    | dockerfilePath  | $(Build.SourcesDirectory)/src/apis/api-netcore/Dockerfile |

- Accès aux secrets
    Dans le stage build, ajouter:
    ```  
    variables:
    - group: BuildSecrets
    ```

- Tasks: 
    ```
    - task: Docker@2
      displayName: Build the image
      inputs:
        command: build
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: $(tags)
        arguments: '--build-arg "ACCESS_TOKEN=$(ACCESS_TOKEN)" --build-arg "USER=$(USER)"'
    ```
    ```
    - task: Docker@2
      displayName: Push the image 
      inputs:
        command: push
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: $(tags)
    ```



 # **node**
- Trigger on **master**, path **src/apis/api-node**
- Variables:

    | Name            | Value                                                  |
    |-----------------|--------------------------------------------------------|
    | imageRepository | api-node                                               |
    | dockerfilePath  | $(Build.SourcesDirectory)/src/apis/api-node/Dockerfile |


- Tasks: 
    ```
    - task: Docker@2
      displayName: Build and push the image
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: $(tags)

    ```


# **python**
- Trigger on **master**, path **src/apis/api-python**
- Variables:

    | Name            | Value                                                    |
    |-----------------|----------------------------------------------------------|
    | imageRepository | api-python                                               |
    | dockerfilePath  | $(Build.SourcesDirectory)/src/apis/api-python/Dockerfile |


- Tasks: 
    ```
    - task: Docker@2
      displayName: Build and push the image
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: $(tags)

    ```


# **Java Spring**
- Trigger on **master**, path **src/apis/api-python**
- Variables:

    | Name            | Value                                                    |
    |-----------------|----------------------------------------------------------|
    | imageRepository | api-python                                               |
    | dockerfilePath  | $(Build.SourcesDirectory)/src/apis/api-python/Dockerfile |


- Tasks: 
    ```
    - task: Maven@3
      displayName: Package the application with Maven
      inputs:
        goals: clean package
        mavenPomFile: $(workingDirectory)/pom.xml
    ```
    ```
    - task: Docker@2
      displayName: Build and push the image
      inputs:
        command: buildAndPush
        repository: $(imageRepository)
        dockerfile: $(dockerfilePath)
        containerRegistry: $(dockerRegistryServiceConnection)
        tags: $(tags)
    ```


# **Client**
- Trigger on **master**, path **src/client**

- Tasks: 
    ```
    - script: yarn install
      displayName: 'Client: yarn install'
      workingDirectory: '$(Build.SourcesDirectory)/src/client-app'
    ```

    ```  
    - script: yarn build
      displayName: 'Client: yarn build'
      workingDirectory: '$(Build.SourcesDirectory)/src/client-app'      
    ```
    ```  
    - task: PublishPipelineArtifact@1
      displayName: 'Client: publish'
      inputs:
        targetPath: '$(Build.SourcesDirectory)/src/client-app/dist'
        artifactName: client
        artifactType: pipeline
    ```

---
# **BONUS**
- Ajouter des unit tests dans la plateforme
- Lancer les unit tests dans la pipeline (si possible)
