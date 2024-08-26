type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchData {
    headers: {
        "Content-Type": string;
    };
    method: HttpMethod;
    body?: string;
}

async function ajax<T>(
    url: string,
    requestMethod: HttpMethod,
    requestBody?: Record<string, any>
): Promise<T | undefined> {
    const fetchData: FetchData = {
        headers: {
            "Content-Type": "application/json",
        },
        method: requestMethod
    };

    // if (requestBody) {
    //     fetchData.body = JSON.stringify(requestBody);
    // }

    try {
        const response = await fetch(url, fetchData);
        
        if (!response.ok) {
            // If response status is not OK (200-299), throw an error
            const errorBody = await response.text(); // Get the error response body
            throw new Error(`HTTP error! Status: ${response.status}. ${errorBody}`);
        }

        // Assuming the response is JSON
        return (await response.json()) as T;

    } catch (error) {
        console.error("Failed to fetch:", error);
        // Optional: Handle different error types here, e.g., network errors, JSON parsing errors
        return undefined;
    }
}

export default ajax;
