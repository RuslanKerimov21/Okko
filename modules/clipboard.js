const clipboards = () => {
    const copyBtn = document.getElementById("copydat");
    copyBtn.addEventListener("click", function() {
      var embedLink = document.getElementById("copylink");
      embedLink.select();
      embedLink.setSelectionRange(0, 99999);
    });
};
export default clipboards;