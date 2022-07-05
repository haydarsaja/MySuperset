import org.jenkinsci.plugins.pipeline.modeldefinition.Utils
pipeline {
    agent none
    environment {
        CLUSTER_PROD    = 'kubernetes-sirclo-prod'
        ENTRYPOINT      = '/home/jenkins/entrypoint/entrypoint.sh'
    }
    stages {
        stage("are you sure to release to a production?") {
            steps {
                script {
                    try {
                        timeout(time: 1, unit: "HOURS") {
                            input( message: 'release to production', ok: 'deploy')
                        }
                    } catch (Throwable e) {
                        env.SKIP_DEPLOY_PROD = "true"
                        echo "Caught ${e.toString()}"
                        Utils.markStageSkippedForConditional('are you sure to release to a production?')
                    }
                }
            }
        }
        stage("release to production") {
            agent {
                kubernetes {
                  cloud "${CLUSTER_PROD}"
                  inheritFrom 'jenkins-agent'
                }
            }
            steps {
                script {
                    if (env.SKIP_DEPLOY_PROD == 'true') {
                        Utils.markStageSkippedForConditional('release to production')
                    } else {
                        container('deployer') {
                            sh "${ENTRYPOINT}"
                            sh 'deployer --build-from-pod --use-helmfile --use-jenkins-agent --project=sirclo-prod --docker-tag=${GIT_COMMIT}-${BUILD_NUMBER}'
                        }
                    }
                }
            }
        }
    }
}