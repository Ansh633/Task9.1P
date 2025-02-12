pipeline {
    agent any

    tools {
        nodejs 'nodejs'  // Use Node.js environment in Jenkins
    }

    stages {
        stage("Clone Repository") {
            steps {
                git url: 'https://github.com/Ansh633/Task9.1P.git', branch: 'main'
            }
        }

        stage("Install Dependencies") {
            steps {
                bat "npm install --verbose --omit=optional"
            }
        }

        stage("Build") {
            steps {
                bat "npm run build"
            }
        }

        stage("Test") {
            steps {
                bat "npm test -- --passWithNoTests"  // Adjust if you have actual tests
            }
        }

        stage("Code Analysis") {
            steps {
                bat "npx eslint src"  // Runs ESLint for code quality checks
            }
        }

        stage("Deploy to Netlify") {
            steps {
                script {
                    def netlifySiteID = '874caac1-235f-4e36-a524-af99313e038f' // Replace with your actual Site ID
                    def netlifyAccessToken = 'nfp_ptqanm6NWhv6rz8oTWurNAncvsVhrJZdbc9c'  // Store as a Jenkins secret

                    bat "npm install netlify-cli --save-dev"
                    bat "npx netlify deploy --site ${netlifySiteID} --auth ${netlifyAccessToken} --dir ./build --prod"
                }
            }
        }
    }
}
