const AvatarModal = (props) => {
  return (
    <div id="modalWindow" class="modal">
		      <span class="close" onclick="document.getElementById('myModal').style.display='none'">&times;</span>
      <img class="modal-content" id="img01" src={props.picture}/>
		      < div id="caption"></div>
	  </div>
  )
}

export default AvatarModal
