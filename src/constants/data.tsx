import React from 'react';
import { Project, SkillItem, Testimonial } from '../types';
import copyEnableImg from '../assets/copy-enable.png';

export const PROJECTS_DATA: Project[] = [
    {
        title: "Easily Enable Copy and Right-Click",
        github: "https://github.com/rifatcholakov/Easily-Enable-Copy-and-Right-Click",
        image: copyEnableImg
    },
    {
        title: "Easy Volume Booster",
        github: "https://github.com/rifatcholakov/Easy-Volume-Booster",
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23111827%22%2F%3E%3C%2Fsvg%3E"
    },
    {
        title: "Cozy Spring Meadow",
        github: "https://github.com/rifatcholakov/Cozy-Spring-Meadow",
        image: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23111827%22%2F%3E%3C%2Fsvg%3E"
    }
];

export const SKILLS_DATA: SkillItem[] = [
    {
        title: "Development",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        items: [
            "Build scalable, maintainable applications using React, TypeScript, or other modern frameworks",
            "Architect modular component systems for consistent and maintainable UIs",
            "Integrate seamlessly with APIs, microservices, and third-party platforms"
        ]
    },
    {
        title: "Workflow & Delivery",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9"></polyline>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <polyline points="7 23 3 19 7 15"></polyline>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
        ),
        items: [
            "Set up CI/CD pipelines & automated deployments for smooth, reliable releases",
            "Apply Agile practices: iterative development, sprint planning, and backlog management",
            "Deploy scalable solutions on cloud & serverless platforms, with performance monitoring and observability"
        ]
    },
    {
        title: "Team & Product Impact",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <polyline points="17 11 19 13 23 9" />
            </svg>
        ),
        items: [
            "Collaborate effectively with product, design, and backend teams",
            "Plan system architecture for long-term maintainability and scalability",
            "Mentor teammates, enhance UX, and drive efficiency and quality without sacrificing speed"
        ]
    }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
    {
        text: "Awesome team player with excellent attention to detail is what comes to mind when I think of working with Rifat. I have been impressed by his professionalism and creativity when handling projects. He is committed, understands the importance of feedback and follows up on guidelines quickly and effectively. No matter how stressful a situation gets he knows how to keep his cool and lighten the mood. And as such, I strongly believe Rifat can be a wonderful asset to any team.",
        author: "Nadezhda Tancheva",
        role: "Marketer at Chaos"
    },
    {
        text: "I worked with Rifat on a few side projects and was extremely pleasantly surprised. One of the biggest headaches entrepreneurs face with developers is that they are rarely proactive and very few possess critical skills outside the scope of web/app development. Rifat demonstrated great problem-solving skills, self-starter mentality and commitment to getting the job done from the start. To have technical issues resolved before I ever knew I had them is more than I could ever ask from an outside contractor. I will definitely keep using his services in the future.",
        author: "Jordan Tsanev",
        role: "Director of Marketing at Impulse Technology, LLC"
    },
    {
        text: "Rifat did a great job on the website project. He was able to meet all deliverable dates. His knowledge and attention to detail have aided in keeping our company’s website clean and elegant. He is not only thorough but also easy to work with and always willing to take the time to discuss any concerns and respond to questions. I highly recommend his service.",
        author: "Rado Tsanev",
        role: "CEO at Impulse Technology, LLC"
    },
    {
        text: "Rifat is an amazing teammate! I really enjoyed working with him – not just because he is a skilled developer who does an amazing job but also because he is always there willing to give you that extra help whenever you need it and take some of the burdens out of your shoulders. Thanks a lot, Rifat!",
        author: "Anita Nenova",
        role: "Frontend Developer at SiteGround"
    }
];
