pipeline {
    agent { docker { image 'node:14.2.0' } }
    stages {
     stage('test') {
        steps {
            sh 'npm --version'
            sh 'npm install'
            sh 'npm test'
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