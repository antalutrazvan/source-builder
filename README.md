# source-builder
Basic Web Project Builder for JS and CSS Source files with live-build functionality  

#Instructions:
Clone the source-builder project in your project folder, open a terminal inside and run **npm install** to get the required dependencies.  
After that you can run the app with **gulp**.  
This will do an initial build and start the live build and jshint watchers.  
1. **--build** to do just a single build.  
2. **--production** to minify and generate sourcemaps.  
3. **--es6** to compile es6 scripts to es5.  

###TODO:
unify plugins and required modules in a single map module  
chache-buster  
full bundle concatenation(vendors and own sources)  
package creation  
testing modules support  
