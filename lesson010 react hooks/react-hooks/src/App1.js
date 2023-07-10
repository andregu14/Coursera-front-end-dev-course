import FeedbackForm from "./components/FeedbackForm";

function App1() {
    const handleSubmit = () => {
        console.log("Form submitted!");
    }

    return (
        <div>
            <FeedbackForm onSubmit={handleSubmit} />
        </div>
    )
}

export default App1