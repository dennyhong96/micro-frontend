## Integration Process

- Designate one app as the Host and one as the Remote
- Host is the project that's trying to make use of code from other projects
- Remote is the project that's making code available to other projects
- In the Remote, decide which modules(files) we want to make available to other projects
- Set up Module Federation plugin to expose those modules(files)
- In the Host, decide which modules(files) we want to get from the remote
- Set up Module Federation plugin to fetch those modules(files)
- In the Host, refactor the entry point to _load asynchronously_
- In the Host, import whatever modules(files) we need from the remote

## ModuleFederationPlugin - Remote Mode

![Remote](_img/remote.png "Remote")
![RemotePlugin](_img/remote_mfplugin.png "RemotePlugin")

## ModuleFederationPlugin - Host Mode

![Host](_img/host.png "Host")
![RemotePlugin](_img/host_mfplugin.png "RemotePlugin")

## ModuleFederationPlugin - Remote + Host Flow

![RemoteHost](_img/remote_host.png "RemoteHost")

## Development Process

![Dev Process](_img/development_process.png "Dev Process")
![Dev Process2](_img/development_process_2.png "Dev Process2")
