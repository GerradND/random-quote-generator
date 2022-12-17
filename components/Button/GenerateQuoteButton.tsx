export default function GenerateQuoteButton({num, value}) {

    const handleSubmit = () => {

    }

    const checkNumberOfPeople = () => {
        const input = value.split(/\r?\n/).length;
        return num == input
    }

    return (
        <button
            onClick={() => {
                if (checkNumberOfPeople()) {
                    handleSubmit()
                } else {
                    console.log("Number of people doesn't match.")
                }
            }}
            className="bg-gray-300 border-2 border-black resize-none"
        >
            Generate
        </button>
    );
}