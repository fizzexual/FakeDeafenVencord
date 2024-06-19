
# VENCORD FAKE DEAFEN

How to install and use Fake Deafen/Mute in Vencord

Requirements:
-
`NodeJs` - https://nodejs.org/en (Version does not matter, latest should suffice)  
`Git` - https://git-scm.com/download/win (Select based on your PC)                        
`Vencord` - https://github.com/Vendicated/Vencord

Installation:            
-
(1) Open CMD Prompt

(2) Run the following commands in order:
```bash
npm i -g pnpm
```
- This command installs the pnpm package that is used to manage other packages. I = install / G = globally, it installs the package so it can be accessed anywhere.
-------  
ㅤ    
```bash
git clone https://github.com/Vendicated/Vencord
cd Vencord
```
- `git clone https://github.com/Vendicated/Vencord` | This command clones/downloads the entire Vencord repo, you can just install it as a zip but this is easier because you don't have to add it to the right directory, extract it etc. (You could just download the raw zip if you want)

- `cd Vencord` | This command goes into the Vencord folder created from the git clone command.
-------  
ㅤ
```bash
pnpm install --frozen-lockfile
```

- `pnpm install --frozen-lockfile` | This command installs all the required needed packages for Vencord to run. 
`--frozen-lockfile`, prevents it from updating the lockfile.

-------  
ㅤ
```bash
pnpm build 
pnpm inject 
```

- `pnpm build` | This command just compiles all files to get ready for injection

- `pnpm inject` | This command injects/installs all the repo to whatever it's assigned to, in this case it's Discord. Choose the option `Install Vencord` and then choose the your recommended location.


Adding the plugin:
-

Once Vencord is installed to Discord go to the location where the git clone command installed Vencord. *(Usually in main drive, /Users/your_pc_name)*. 
When in Vencord folder go to src --> plugins and drop the files(fake-deafen and philsPluginLibrary). Now run the commands 

```bash
pnpm build 
pnpm inject 
```

Install Vencord and you are ready.
If you have questions feel free to ask me on discord: `lauzezzif`


## CREDITS

- [blockgameentity](https://github.com/blockgameentity) - origiral plugin developer.


