module.exports = {
  onPreBuild: ({ utils }) => {
    const currentProject = process.env.PROJECT_NAME;
    const lastDeployedCommit = process.env.CACHED_COMMIT_REF;
    const currentDeployedComit = process.env.COMMIT_REF;
    const latestCommit = 'HEAD';
    console.log('🚑 lastDeployedCommit: ', lastDeployedCommit);
    console.log('🚑 currentDeployedComit: ', currentDeployedComit);

    const projectHasChanged = projectChanged(
      currentProject,
      lastDeployedCommit,
      latestCommit
    );
    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${currentProject} was not affected by the latest changes. lastDeployedCommit=${lastDeployedCommit} and currentDeployedComit=${currentDeployedComit}`
      );
    }
  },
};

function projectChanged(currentProject, fromHash, toHash) {
  const execSync = require('child_process').execSync;
  const getAffected = `nx print-affected --base=${fromHash} --head=${toHash}`;
  const output = execSync(getAffected).toString();
  //get the list of changed projects from the output
  console.log('🚀 currentProject: ', currentProject);
  console.log('🚀 fromHash: ', fromHash);
  const changedProjects = JSON.parse(output).projects;
  if (changedProjects.find((project) => project === currentProject)) {
    return true;
  } else {
    return false;
  }
}
