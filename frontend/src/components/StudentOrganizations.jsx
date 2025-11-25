import React from "react";
import OrganizationsCarousel from "./OrganizationsCarousel";

export default function StudentOrganizationsWrapper() {
  const orgs = [
    { id: 1, name: "CUET Photographic Society", img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop", link: "/organization/1" },
    { id: 2, name: "ASRRO", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop", link: "/organization/2" },
    { id: 3, name: "CUETJA", img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=400&h=300&fit=crop", link: "/organization/3" },
    { id: 4, name: "Joyoddhoney", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop", link: "/organization/4" },
    { id: 5, name: "DebSoc", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop", link: "/organization/5" },
    { id: 6, name: "Robotics Club", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop", link: "/organization/6" },
    { id: 7, name: "Drama Club", img: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=300&fit=crop", link: "/organization/7" },
    { id: 8, name: "Music Circle", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop", link: "/organization/8" },
    { id: 9, name: "Eco Club", img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop", link: "/organization/9" },
    { id: 10, name: "IEEE Student Branch", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", link: "/organization/10" },
    { id: 11, name: "AI Club", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop", link: "/organization/11" },
    { id: 12, name: "Sports Club", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop", link: "/organization/12" },
    { id: 13, name: "Literature Circle", img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop", link: "/organization/13" },
    { id: 14, name: "Programming Club", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop", link: "/organization/14" },
    { id: 15, name: "Volunteer Group", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop", link: "/organization/15" },
    { id: 16, name: "Design Club", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop", link: "/organization/16" },
  ];

  return <OrganizationsCarousel items={orgs} visible={4} autoplay={true} interval={3500} />;
}
