pipeline {
  agent {
    docker {
      image 'node:8.10.0'
    }
    
  }
  stages {
    stage('Test') {
      steps {
        sh 'yarn && npm test'
      }
    }
    stage('Publish pacts') {
      steps {
        sh 'yarn && npm run publishPacts'
      }
    }
  }
  environment {
    PACT_BROKER_URL = 'http://docker.for.mac.host.internal:8081'
  }
}