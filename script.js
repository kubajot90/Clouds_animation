document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", (e) => moveElements(e));

  const clouds = document.querySelectorAll(".clouds");
  const person = document.querySelector(".person");

  function moveElements(event) {
    const { clientY, clientX } = event;

    clouds.forEach((cloud) => {
      const ratioX = cloud.getAttribute("ratioX");
      const ratioY = cloud.getAttribute("ratioY");

      cloud.style.transform = `translate(${
        (clientX - window.innerWidth / 2) * ratioX
      }%,${(clientY - window.innerHeight / 2) * ratioY}%)`;
    });
    const ratioX = person.getAttribute("ratioX");
    const ratioY = person.getAttribute("ratioY");

    person.style.transform = `translate(${
      (clientX - window.innerWidth / 2) * ratioX
    }%,${(clientY - window.innerHeight / 2) * ratioY}%)`;
  }
});
