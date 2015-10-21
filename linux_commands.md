## Linux commands exercises 

Using the `learnyounode_notes_10.txt file, I used linux commands to maunipulate the output from the **learnyounode REPL**

###### All the commands used are MAC OS specific. so, it may vary on linux 


*Commands along with explanation:*

1. Getting Standard output to a txt file
2. Find strftime github link via `grep, egrep and sed` 
3. Output into specific line in a JS file via `gsed` 
4. Get the date formatting  -- "YYYY-MM-DD hh:mm" via `gsed, sed`

#### Getting standard output into txt file

Typically. If you are following the NodeJS tutorials `learnyounode` series. You will know the command `learnyounode`,the REPL will appear in the command line and you will be able to the select the chapter. However, we want to be able to capture that input (learnyounode output) into a txt file (name_of_your_file.txt) that we can manipulate. 

We will do this through the `tee` commmand. This utility comamnd basically copies standard input to standard output.

``` 
learnyounode | tee name_of_your_file.txt 
```

#### Grepping links

Using a combination of grep, egrep and sed, I was able to extract the link provided by the learnyounode and visit the page via google chrome all via command line. 

the exact command that I used was: 
```
open -a "Google chrome" $(egrep -o "https://.*/strftime]" learnyounode_notes_10.txt | sed 's/.$//')
```

###### Breaking it down


1. Opening Google chrome (command line):
```
open -a "Google chrome" http:// ...
```

This commands does exactly as it seems. Opens google chrome to the given link provided `http://...`. 


2. Command substitution in bash:

```
$(...)
```

After some google search. It seems that the jury is that this command is a command substitution. 
So, essentially, the commands ran in inside that wrapper will be replace with its output. In this case, this would be the link to the github account. 

3. Grepping:
```
egrep -o "https://.*/strftime]" filename ...
```

* **Commmand:** egrep  *(same as grep -E)*
* **Tag:**  *Prints only the matching part of the lines.*
* **Regex:** *"https://.*/strftime]"* (quick and dirty regex to find link)

4. Cutting last character

```
sed 's/.$//'
```

This removes last line of the output no matter what it is. In this case, I had a `]` at the end after running 
`egrep -o "https://.*/strftime]" learnyounode_notes_10.txt`. So, i've used this to get rid of the lingering character. 

** Tips **

###### run these commands with `cat` which is an useful command to see what is within a file. Then go forth to refine your commands. 


#### Output into specific line into JS file

Using the infamous `gsed` and `sed` commands. I wanted to defined the local variable `strftime` from the command line without the need of opening up a text editor. 


```
 gsed -i "5i var strftime = require('strftime');" learnyounode_10.js
```




#### Output into specific line into JS file
gsed -i "5i$( sed -n '12,12p' learnyounode_notes_10.txt | cut -c 10-27)" learnyounode_10.js


