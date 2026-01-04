"use client";
export async function shutdownDesktop(id: number) {
    console.log(`Shuting down desktop with id ${id}.`);

    try {
        const response = await fetch(`/api/stop?id=${id}`);   
        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        
        console.log("Desktop stopped.");
        alert("Desktop stopped!")

    } catch (err) {
        console.error("Failed to stop desktop:", err);
        alert("Failed to stop desktop.")
        throw err;
    }
}

export async function wakeDesktop(id: number){
    console.log(`Starting desktop with id ${id}.`);

    try {
        const response = await fetch(`/api/start?id=${id}`);

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }
        console.log("Desktop started.");
        alert("Desktop started!")
    } catch (err) {
        console.error("Failed to start desktop:", err);
        alert("Failed to start desktop.")
        throw err;
    }
}
