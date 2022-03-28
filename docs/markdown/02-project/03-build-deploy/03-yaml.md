<!-- .slide: class="transition bg-blue" -->
# Build & Deploy
![logo](./assets/images/services/pipelines/logo.svg)

**Azure Pipelines**


##--##
## YAML
- infrastructure as code
- avec le reste du code
    => modif dans une branche
- templates


##--##

## VSCode: Azure Pipelines

Extension Id: ms-azure-devops.azure-pipelines

Syntax highlighting, IntelliSense, and more for Azure Pipelines YAML

https://marketplace.visualstudio.com/items?itemName=ms-azure-devops.azure-pipelines


##--##
## YAML Exemple


Notes:
Utiliser /steps/03-build-deploy/sample.yaml

##--##
## triggers 
```yaml
# A pipeline with no CI trigger
trigger: none
___________________________________________________________________________________________________

trigger:
- master
- releases/*
___________________________________________________________________________________________________

# specific branch build
trigger:
  branches:
    include:
    - master
    - releases/*
    exclude:
    - releases/old*
___________________________________________________________________________________________________

trigger:
  branches:
    include:
    - master
    - releases/*
  paths:
    include:
    - docs
    exclude:
    - docs/README.md
```


##--##
## Shell: Powershell

  
```yaml
- task: PowerShell@2
  inputs:
    script: Write-Host "Hello world"

- task: PowerShell@2
  inputs:
    filePath: ./helloWorld.ps1

# Shortcut
- powershell: Write-Host "Hello world"
  env:
    ENV_VALUE: test

# Shortcut     
- pwsh: Write-Host "Hello world"
```

Options
- workingDirectory
- displayName
- env
- ...

##--##
## Shell: Bash
```yaml
- task: Bash@3
  inputs:
    #targetType: 'filePath' # Optional. Options: filePath, inline
    #filePath: # Required when targetType == FilePath
    #arguments: # Optional
    #script: '# echo Hello world' # Required when targetType == inline
    #workingDirectory: # Optional
    #failOnStderr: false # Optional
    #noProfile: true # Optional
    #noRc: true # Optional

- bash: # script path or inline
  workingDirectory: #
  displayName: #
  failOnStderr: #
  env:  # mapping of environment variables to add
```


##--##
## Default shell
```yaml
- script: |
    npm install
    npm test
```

##--##
## Platform specific shell
```yaml
steps:
# Linux
- bash: |
    export IPADDR=$(ip addr | grep 'state UP' -A2 | tail -n1 | awk '{print $2}' | cut -f1  -d'/')
    echo "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Linux' )
  displayName: Get IP on Linux
# macOS
- bash: |
    export IPADDR=$(ifconfig | grep 'en0' -A3 | grep inet | tail -n1 | awk '{print $2}')
    echo "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Darwin' )
  displayName: Get IP on macOS
# Windows
- powershell: |
    Set-Variable -Name IPADDR -Value ((Get-NetIPAddress | ?{ $_.AddressFamily -eq "IPv4" -and !($_.IPAddress -match "169") -and !($_.IPaddress -match "127") } | Select-Object -First 1).IPAddress)
    Write-Host "##vso[task.setvariable variable=IP_ADDR]$IPADDR"
  condition: eq( variables['Agent.OS'], 'Windows_NT' )
  displayName: Get IP on Windows

# now we use the value, no matter where we got it
- script: |
    echo The IP address is $(IP_ADDR)

```

##--##
## .net core: Build

```
- task: DotNetCoreCLI@2
  inputs:
    command: 'build'
```

##--##
## .net core: Restore
```
- task: DotNetCoreCLI@2
  displayName: 'dotnet restore'
  inputs:
    command: 'restore'
    feedsToUse: 'select'
    feedRestore: 'projectName/feedName'
    projects: '**/*.csproj'
    includeNuGetOrg: true
```


