pipeline {
    agent { docker { image 'circleci/node:10.13-stretch-browsers' } }

    environment {
        DB_ENGINE = 'sqlite'
    }

    stages {

        stage('get configuration') {
            steps {
                sh 'npm config get registry'
                sh 'npm config get http-proxy'
                sh 'npm config get https-proxy'
            }
        }

        stage('dependencies') {
            steps {
                echo "Installing Dependencies"
                sh 'npm config set loglevel info'
                sh 'npm config set registry http://registry.npmjs.org'
                sh 'npm set progress=false'
                sh 'npm install --verbose'
            }
        }

        stage('lint') {
            steps {
                echo "Linting application"
                sh 'npm run lint'
            }
        }

        stage('test') {
            steps {
                echo "Running Tests"
                echo "Database engine is ${DB_ENGINE}"
                sh 'npm --version'
                sh 'npm test --watch=false'
            }
        }

        stage('share pacts') {
          steps {
            echo "Sharing PactFiles"
            sh 'npm run share:pact'
          }
        }

        stage('build') {
            steps {
                echo "Running Build"
                sh 'npm run build'
            }
        }

    }
    post {
        always {
            echo 'The pipeline was run'
        }
        success {
            echo 'Successfully tested angular application'
        }
        failure {
            echo 'errors occurred when testing the appication'
        }
    }
}
