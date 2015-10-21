## Linux commands exercises 

Using the `test.txt` file, I used linux commands to maunipulate the output from the **learnyounode REPL**. The `learnyounode_notes_10.txt` is used in the example. 

** All the commands used are MAC OS specific. so, it may vary on linux ** 

*Commands along with explanation:*

1. Find strftime github link via `grep, egrep and sed` 
2. Output into specific line in a JS file via `gsed` 
3. Get the date formatting  -- "YYYY-MM-DD hh:mm" via `sed`


#### Grepping links

Using a combination of grep, egrep and sed, I was able to extract the link provided by the learnyounode and visit the page via google chrome all via command line. 

the exact command that I used was: 
```
    open -a "Google chrome" $(egrep -o "https://.*/strftime]" learnyounode_notes_10.txt | sed 's/.$//')
```

###### Breaking it down


1.  `open -a "Google chrome" http:// ...`

This commands does exactly as it seems. Opens google chrome to the given link provided `http://...`. 


2. `$(...)`

After some google search. It seems that the jury is that this command is a command substitution. 
So, essentially, the commands ran in inside that wrapper will be replace with its output. In this case, this would be the link to the github account. 

3. `egrep -o "https://.*/strftime]" filename ...`

**Commmand:** egrep  *(same as grep -E)*
** Tag: ** -o  *Prints only the matching part of the lines.*
** Regex: ** *"https://.*/strftime]"* (quick and dirty regex to find link)

4. `sed 's/.$//'` 

This removes last line of the output no matter what it is. In this case, I had a `]` at the end after running 
`egrep -o "https://.*/strftime]" learnyounode_notes_10.txt`. So, i've used this to get rid of the lingering character. 

** Tips **

run these commands with `cat` which is an useful command to see what is within a file. Then go forth to refine your commands. 



