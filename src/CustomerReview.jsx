import Card from "./Components/Card";

function CustomerReview() {
    return (
        <div class="w-full">
            <div class="text-4xl font-bold text-center mt-10">
                Customer Reviews
            </div>
            <div
                class="flex flex-wrap p-10 max-lg:p-5 justify-center gap-5 font-semibold text-md"
            >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>

    )
};
export default CustomerReview; 