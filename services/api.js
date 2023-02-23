import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nuareafrukmnjnaakplk.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscWJrcm91dnFsamd5cWh0amhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODMyMTMsImV4cCI6MTk5Mjc1OTIxM30.uWpI5f4AyRhEwHR13ZGJ5fttlzFvLiBf2hTV2jANazU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YXJlYWZydWttbmpuYWFrcGxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAyMjc0MjEsImV4cCI6MTk3NTgwMzQyMX0.3qUEldVsmcr_yrpf8N1-qBGdHLB1QCy9nB6-nApVQIA"
    }
})