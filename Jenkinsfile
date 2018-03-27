pipeline {
  agent {
    docker {
      image 'node:8.10.0'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh '''
npm install && npm test'''
      }
    }
    stage('Publish pacts') {
      steps {
        sh 'npm install && PACT_BROKER_URL=http://localhost:8081 npm run publishPacts'
      }
    }
  }
}