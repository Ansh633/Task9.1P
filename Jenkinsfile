pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages {
        stage("Install") {
            steps {
                git url : "https://github.com/Ansh633/Task9.1P.git", branch : "main"
                bat "npm install --verbose -omit=optional"
            }
        }
        stage("Build"){
            steps{
                
                bat "npm run build"
            }
        }
        
        
        
        stage("Code Analysis"){
            steps{
                bat "npx eslint src"
            }
        }
        
        stage("Deploy"){
            steps{
                script{
                    def netlifySiteID = '874caac1-235f-4e36-a524-af99313e038f'
                    def netlifyAccessToken = 'nfp_ptqanm6NWhv6rz8oTWurNAncvsVhrJZdbc9c'
                    
                    bat "npm install netlify-cli --save-dev"
                    bat "npx netlify deploy --site ${netlifySiteID} --auth ${netlifyAccessToken} --dir ./build --prod"
                }
            }
        }
    
    }
}
