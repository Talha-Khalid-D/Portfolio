const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalnavlist = navlist.length,
      allsection = document.querySelectorAll(".section"),
      totalsection = allsection.length;
      for(let i = 0 ; i<totalnavlist;i++)
        {
            const a = navlist[i].querySelector("a");
            a.addEventListener("click",function()
            {
                removebacksection();   
                for(let j =0;j<totalnavlist;j++){
                    if (navlist[j].querySelector("a").classList.contains("active")){
                        addbacksection(j);                       
                       // allsection[j].classList.add("back-section");
                    }
                    navlist[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth < 1200){
                    asidesectiontogglerbtn();
                }
            })
        }
      function removebacksection(){
        for(let i=0; i<totalsection;i++){
            allsection[i].classList.remove("back-section");
        }
      }
      function addbacksection(num){
        allsection[num].classList.add("back-section");
      }
      function showSection(element){
        for(let i=0; i<totalsection;i++){
            allsection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector( "#" + target ).classList.add("active");
      }
      function updateNav(element){
        for(let i =0;i<totalnavlist;i++){
            navlist[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if ( target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                navlist[i].querySelector("a").classList.add("active");
            }
        }
      }
      document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionindex = this.getAttribute("data-section-index");
        // console.log(sectionindex);
        showSection(this);
        updateNav(this);
        removebacksection();
        addbacksection();
      })

// Initialize EmailJS with your public key
(function() {
    emailjs.init("7Q7eohu-X_1i3ACjG"); // Replace with actual public key
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Send email using EmailJS
    emailjs.sendForm('service_5cqi2qr', 'template_dgf8z74', this)
        .then(function(response) {
            // Success
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('form-status').innerHTML = 
                '<p style="color: green;">✓ Message sent successfully!</p>';
            document.getElementById('contact-form').reset();
        }, function(error) {
            // Error
            console.log('FAILED...', error);
            document.getElementById('form-status').innerHTML = 
                '<p style="color: red;">✗ Failed to send message. Please try again.</p>';
        })
        .finally(function() {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});
