'use client'

import CitySelector from "@/components/CitySelector";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-[#2EB62C] to-[#B3D475] p-10">
      <Card className="max-w-3xl">
        <Text className="text-6xl font-bold text-center mb-10">ForecastNow</Text>

        <Subtitle className="text-xl text-center">
          Fetch <strong>AI generated</strong> weather reports for any city around the world!
        </Subtitle>

        <Divider className="my-10" />

        <Card className="bg-gradient-to-br from-[#2EB62C] to-[#B3D475]">
          <CitySelector />
        </Card>
      </Card>
    </main>
  )
}
