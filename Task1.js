const profile = document.querySelector('#mainProfile');

fetch('https://randomuser.me/api/?results=30')
    .then((resp) => resp.json())
    .then(function (data) {
        let users = data.results;
        return users.map((user) => {


            const mainDiv = document.createElement('div');
            const subDiv = document.createElement('div');
            const bodyFrame = document.createElement('div');
            const bodyCard = document.createElement('div');
            // const plainDiv = document.createElement('div');
            const cardImg = document.createElement('div');
            const profilePix = document.createElement('img');
            const profName = document.createElement('h2');
            const contentSpan = document.createElement('span');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');

            mainDiv.appendChild(subDiv);
            subDiv.append(cardImg, bodyFrame);
            bodyFrame.appendChild(bodyCard);
            cardImg.appendChild(profilePix);
            profile.appendChild(mainDiv);

            mainDiv.classList.add("card", "mb-3");
            subDiv.classList.add("row", "g-0");
            // plainDiv.classList.add("col-md-2");
            cardImg.classList.add("col-md-4")
            bodyFrame.classList.add("col-md-8");
            bodyCard.classList.add("card-body");
            profilePix.classList.add("img-fluid", "profileImg");
            // profName.classList.add("card-title");

            let firstName = user.name.first;
            let lastName = user.name.last;
            let email = user.email;
            let city = user.location.city;
            let nationality = user.nat;
            let heading = bodyCard.appendChild(profName);
            let cOntentSpan = bodyCard.appendChild(contentSpan);
            let eMail = bodyCard.appendChild(p1);
            let cIty = bodyCard.appendChild(p2);
            let nAtionality = bodyCard.appendChild(p3);
            heading.innerHTML = `${firstName} ${lastName}`;
            eMail.innerHTML = `${email}`;
            cIty.innerHTML = `City: ${city}`;
            nAtionality.innerHTML = `Nationality: ${nationality}`;
            cOntentSpan.innerHTML = "Email:"
            profilePix.src = user.picture.large;


        });
    })

    .catch(function(error) {
        console.log('error', error);
    });
    