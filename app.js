const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Define content for each service
const content = {
    healthcare: `
        <section>
            <h2>Healthcare Services</h2>
            <p>Here you can access remote consultations, book appointments, and find information on health services.</p>
            <form action="/book-appointment" method="POST">
                <label for="appointment">Book an Appointment:</label>
                <input type="date" id="appointment" name="appointment">
                <button type="submit">Book Now</button>
            </form>
        </section>
    `,
    education: `
        <section>
            <h2>Educational Resources</h2>
            <p>Find online courses, tutorials, and educational materials to enhance your knowledge and skills.</p>
            <form action="/search-course" method="POST">
                <label for="course">Search for a Course:</label>
                <input type="text" id="course" name="course" placeholder="Enter course name">
                <button type="submit">Search</button>
            </form>
        </section>
    `,
    financial: `
        <section>
            <h2>Financial Services</h2>
            <p>Utilize our secure financial services for banking, loans, and financial advice.</p>
            <form action="/select-service" method="POST">
                <label for="service">Select a Service:</label>
                <select id="service" name="service">
                    <option value="banking">Banking</option>
                    <option value="loans">Loans</option>
                    <option value="advice">Financial Advice</option>
                </select>
                <button type="submit">Proceed</button>
            </form>
        </section>
    `,
    transportation: `
        <section>
            <h2>Transportation Services</h2>
            <p>Get information on transportation services, routes, and schedules.</p>
            <form action="/search-route" method="POST">
                <label for="route">Search for a Route:</label>
                <input type="text" id="route" name="route" placeholder="Enter route">
                <button type="submit">Search</button>
            </form>
        </section>
    `
};

// Endpoint to fetch content for each service
app.get('/content/:service', (req, res) => {
    const service = req.params.service;
    res.json({ content: content[service] || '<p>Service not found.</p>' });
});

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Form handling routes (for demonstration purposes)
app.post('/book-appointment', (req, res) => {
    console.log('Appointment booked for:', req.body.appointment);
    res.redirect('/');
});

app.post('/search-course', (req, res) => {
    console.log('Course searched for:', req.body.course);
    res.redirect('/');
});

app.post('/select-service', (req, res) => {
    console.log('Service selected:', req.body.service);
    res.redirect('/');
});

app.post('/search-route', (req, res) => {
    console.log('Route searched for:', req.body.route);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
