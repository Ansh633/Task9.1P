pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }

    environment {
        NETLIFY_SITE_ID = '874caac1-235f-4e36-a524-af99313e038f'
        NETLIFY_ACCESS_TOKEN = credentials('NETLIFY_ACCESS_TOKEN') // Store this in Jenkins Credentials
    }

    stages {
        stage("Build Stage") {
            steps {
                git url: "https://github.com/Ansh633/Task9.1P.git", branch: "main"
                bat "npm install --verbose --omit=optional"
            }
        }

        stage("Test Stage") {
            steps {
                bat "npm install jest --save-dev"  // Ensure Jest is installed
                bat "npx jest --coverage"          // Run Jest with coverage
            }
        }

        stage("Code Analysis Stage") {
            steps {
                bat "npx eslint src"
            }
        }

        stage("Deploy Stage") {
            steps {
                bat "npm install netlify-cli --save-dev"
                bat "npx netlify deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_ACCESS_TOKEN --dir ./build --prod"
            }
        }

        stage("Monitoring & Alerting Stage") {
            steps {
                bat "npx netlify status"
            }
        }
    }
}
