import { NextResponse } from "next/server";
import openai from "@/openai";

export async function POST(request: Request) {
    const { weatherData } = await request.json();

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 0.8,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: "Write a summary today's weather only with the data provided stating the city you are providing the report for.The report should be concise and provide suggestions on how to prepare for the conditions based on rain probability, UV index and temperature. Use the temperature_2m_max, temperature_2m_min, uv_index_max, precipitation_probability to provide the suggestions.Tone should be formal and do not mention the data is being provided by the user in the summary."
            },
            {
                role: 'user',
                content: `Hi there, can I get a summarty of today's weather, use the following information to get the weather data: ${JSON.stringify(weatherData)}`
            }
        ]
    });

    const { data } = response;

    return NextResponse.json(data.choices[0].message);
}