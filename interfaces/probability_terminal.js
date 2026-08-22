const {run:c}=require("../chance_crucible/crucible_melt.js");
const {run:s}=require("../superposition_loom/loom_weaver.js");
const {run:e}=require("../entropy_reef/reef_growth.js");
const {run:l}=require("../likelihood_basilica/basilica_store.js");
const {run:r}=require("../random_drift/drift_wander.js");
async function main(){console.log("Probability Engine…\n");console.log("Chance:",c(0));console.log("Super:",s(0));console.log("Entropy:",e(0));console.log("Likelihood:",l(0));console.log("Random:",r(0));}
if(require.main===module)main();
