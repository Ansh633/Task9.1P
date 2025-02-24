pipeline {
    agent any
    tools{
        nodejs 'nodejs'
    }
    
    stages {
        stage("Build Stage") {
            steps {
                git url : "https://github.com/Ansh633/Task9.1P.git", branch : "main"
                bat "npm install --verbose -omit=optional"
                bat "npm run build"
            }
        }
        stage("Test Stage"){
            steps{
                 bat "npm install jest --save-dev"  // Ensure Jest is installed
                bat "npx jest --coverage"   
               
            }
        }
        
        
        
        stage("Code Analysis Stage"){
            steps{
                bat "npx eslint src"
            }
        }
        
        stage("Deploy Stage"){
            steps{
                script{
                    def netlifySiteID = '874caac1-235f-4e36-a524-af99313e038f'
                    def netlifyAccessToken = 'nfp_ptqanm6NWhv6rz8oTWurNAncvsVhrJZdbc9c'
                    
                    bat "npm install netlify-cli --save-dev"
                    bat "npx netlify deploy --site ${netlifySiteID} --auth ${netlifyAccessToken} --dir ./build --prod"
                }
            }
        }
        stage("Monitoring & Alerting Staf") {
           steps {
               bat "npx netlify status"
                 }
        }
    
    }
}
