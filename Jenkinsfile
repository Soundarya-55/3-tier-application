pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub'

                git branch: 'main',
                    url: 'https://github.com/Soundarya-55/3-tier-application.git'
            }
        }

        stage('Frontend Build') {
            steps {
                echo 'Building Frontend Application'

                sh '''
                    cd frontend
                    echo "Frontend build completed"
                '''
            }
        }

        stage('Backend Build') {
            steps {
                echo 'Installing Backend Dependencies'

                sh '''
                    cd backend
                    npm install
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests'

                sh '''
                    chmod +x test.sh
                    ./test.sh
                '''
            }
        }

        stage('Deploy Backend') {
            steps {
                echo 'Deploying Backend Application'

                sh '''
                    pkill -f "node server.js" || true

                    cd backend

                    nohup node server.js > backend.log 2>&1 &
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                echo 'Deploying Frontend Application'

                sh '''
                    sudo mkdir -p /var/www/html
                    sudo cp frontend/index.html /var/www/html/index.html
                '''
            }
        }

        stage('Verification') {
            steps {
                echo 'Application deployment completed'
            }
        }
    }
}
