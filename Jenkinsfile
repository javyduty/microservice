pipeline {
    agent any
    
    environment {
        AWS_DEFAULT_REGION = 'us-east-1'
        STACK_NAME = 'micro-services'
        TEMPLATE_FILE = './infrastruccture.yaml'
    }
    
    stages {
        stage('Lint') {
            steps {
                echo 'Linting codebase:'
                sh 'npm run lint'
            }
        }
        stage('Build') {
            steps {
                git 'https://github.com/javyduty/microservice.git'
                
                sh 'docker build -t microservices-example .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run microservices-example npm test'
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh "aws cloudformation deploy --template-file $TEMPLATE_FILE --stack-name $STACK_NAME --capabilities CAPABILITY_IAM"
                }
            }
        }
    }
}
