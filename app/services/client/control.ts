"use client";
export async function shutdownDesktop(id) {
    console.log(`Shuting down desktop with id ${id}.`);

    try {
        const response = await fetch(`/api/stop?id=${id}`);   
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Desktop stopped:", result);
        alert("Desktop stopped!")
        return result;
    } catch (err) {
        console.error("Failed to stop desktop:", err);
        alert("Failed to stop desktop.")
        throw err;
    }
}

export async function wakeDesktop(id){
    console.log(`Starting desktop with id ${id}.`);

    try {
        const response = await fetch(`/api/start?id=${id}`);

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Desktop started:", result);
        alert("Desktop started!")
        return result;
    } catch (err) {
        console.error("Failed to start desktop:", err);
        alert("Failed to start desktop.")
        throw err;
    }
}
