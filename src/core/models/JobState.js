var JobState;
(function (JobState) {
    JobState["Standing"] = "standing";
    JobState["Processing"] = "processing";
    JobState["Success"] = "success";
    JobState["Failed"] = "Failed";
})(JobState || (JobState = {}));
export default JobState;
