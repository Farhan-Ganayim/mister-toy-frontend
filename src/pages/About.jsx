import { GoogleMap } from "../cmps/GoogleMap"

export function About() {
    return (
        <section className="about-us container">
            <h2>About Us</h2>
            <p>
                Welcome to Mister Toy! We are a friendly, family-owned toy store that loves to
                help kids have fun. Our shelves are filled with puzzles, dolls,
                cars, outdoor games for every age and budget.
                We test the toys ourselves to make sure they are safe and durable. Visit any of our
                three branches, and our team will greet you with a smile and let you try the toys
                before you buy. Mister Toy is the place where every day feels like a birthday.
            </p>
            <GoogleMap />
        </section>
    )
}
