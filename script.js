function setLang(lang) {

    const title = document.getElementById("title");
    const desc = document.getElementById("description");

    const missionTitle = document.getElementById("mission-title");
    const missionText = document.getElementById("mission-text");

    const activitiesTitle = document.getElementById("activities-title");
    const activities = document.getElementById("activities");

    const contactTitle = document.getElementById("contact-title");
    const contact = document.querySelector(".contact");

    if (lang === "en") {
		desc.classList.remove("fr-text");
		desc.classList.add("en-text");

		missionText.classList.remove("fr-text");
		missionText.classList.add("en-text");

		activities.classList.remove("fr-text");
		activities.classList.add("en-text");

        // TITRE
        title.innerText = "Les Bourgeons d'Or Association";

        // DESCRIPTION
        desc.innerText =
        "Our association is a welcoming space dedicated to autistic children, where we promote their well-being, independence, and development through adapted and caring activities.";

        // MISSION
        missionTitle.innerText = "Our mission";
        missionText.innerText =
        "We support autistic children in a safe and stimulating environment, helping them develop their abilities, creativity, and social integration at their own pace.";

        // ACTIVITÉS
        activitiesTitle.innerText = "Our activities";
        activities.innerHTML = `
            <li>🎨 Painting & pottery</li>
            <li>🏃 Sports (athletics, swimming, cross-country)</li>
            <li>🍳 Cooking workshops</li>
        `;

        // CONTACT
        contactTitle.innerText = "Contact us";
        contact.innerHTML = `
            <p>📍 <strong>Address :</strong><br>
            45 Rue Le Corbusier<br>
            Saint-Etienne, 42100</p>

            <p>📞 <strong>Phone :</strong><br>
            <a href="tel:+33755686128">+33 7 55 68 61 28</a></p>

            <p>📧 <strong>Email :</strong><br>
            <a href="mailto:lesbourgeonsdorassociation@gmail.com">
            lesbourgeonsdorassociation@gmail.com
            </a></p>
        `;

    } else {
		desc.classList.remove("en-text");
		desc.classList.add("fr-text");

		missionText.classList.remove("en-text");
		missionText.classList.add("fr-text");

		activities.classList.remove("en-text");
		activities.classList.add("fr-text");

        // TITRE
        title.innerText = "Les Bourgeons d'Or";

        // DESCRIPTION
        desc.innerText =
        "Notre association est un lieu d'accueil dédié aux enfants autistes, où nous favorisons leur bien-être, leur autonomie et leur développement à travers des activités adaptées.";

        // MISSION
        missionTitle.innerText = "Notre mission";
        missionText.innerText =
        "Nous accompagnons les enfants autistes dans un environnement sécurisé et bienveillant, en valorisant leur créativité et leur intégration sociale.";

        // ACTIVITÉS
        activitiesTitle.innerText = "Nos activités";
        activities.innerHTML = `
            <li>🎨 Peinture & poterie</li>
            <li>🏃 Sport (athlétisme, natation, cross)</li>
            <li>🍳 Ateliers cuisine</li>
        `;

        // CONTACT
        contactTitle.innerText = "Nous contacter";
        contact.innerHTML = `
            <p>📍 <strong>Adresse :</strong><br>
            45 Rue Le Corbusier<br>
            Saint-Étienne, 42100</p>

            <p>📞 <strong>Téléphone :</strong><br>
            <a href="tel:+33755686128">07 55 68 61 28</a></p>

            <p>📧 <strong>Email :</strong><br>
            <a href="mailto:lesbourgeonsdorassociation@gmail.com">
            lesbourgeonsdorassociation@gmail.com
            </a></p>
        `;
    }
}