document.getElementById('appointment-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Fetch city and course type data from mock API
    const cities = await fetch('https://run.mocky.io/v3/fb975edb-4ea2-4e50-8206-8814a1706514').then(response => response.json());
    const courseTypes = await fetch('https://run.mocky.io/v3/3a7833b6-4f2c-40ba-8116-2cb4ea549221').then(response => response.json());

    // Fill the drop downs with data
    const citySelect = document.getElementById('city');
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });

    const courseTypeSelect = document.getElementById('course-type');
    courseTypes.forEach(courseType => {
        const option = document.createElement('option');
        option.value = courseType;
        option.textContent = courseType;
        courseTypeSelect.appendChild(option);
    });

    // Fetch location based on selected city and submit form data
    const selectedCity = citySelect.options[citySelect.selectedIndex].value;
    const selectedCourseType = courseTypeSelect.options[courseTypeSelect.selectedIndex].value;
    const selectedLocation = document.getElementById('location').value;
    const locationData = await fetch(`https://designer.mocky.io/location?city=${selectedCity}&location=${selectedLocation}&courseType=${selectedCourseType}`).then(response => response.json());

    console.log('Form submitted successfully.', locationData);
});

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', () => {
  const phoneValue = phoneInput.value;
  const phoneRegex = /^[0-9]{11}$/;
  if (!phoneRegex.test(phoneValue)) {
    phoneInput.setCustomValidity('Please enter a valid Turkish phone number.');
  } else {
    phoneInput.setCustomValidity('');
  }
});