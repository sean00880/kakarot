"use client";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
// Define a type for the categories keys
type Category = "Origin" | "Family Tree" | "Transformations" | "References";

const tabImages: Record<Category, string[]> = {
  Origin: ["/images/origin.jpg"],
  "Family Tree": ["/images/family.png", "/images/goku2.avif"],
  Transformations: ["/images/placeholder.jpg"],
  References: ["/images/references.jpg"],
};

const categories: Record<Category, string[] | { title: string; description: string; image: string }[]> = {
  Origin: [
    "Upon his arrival on Earth, the infant Saiyan Kakarot was discovered by the kind-hearted martial artist, Son Gohan, who adopted him and gave him the name Goku. Initially violent due to his Saiyan instincts, a head injury transformed him into a loving, cheerful protector of the planet.",
    "From that point forward, Goku’s journey intertwined with Earth’s fate. He trained tirelessly under great masters, forged unbreakable friendships, and stood as a beacon of hope in the face of overwhelming odds."
  ],
  "Family Tree": [
    "Goku’s bloodline is deeply rooted in Saiyan history. His father, Bardock, fought valiantly against the tyrannical Frieza, and his brother, Raditz, introduced him to the truth of his alien heritage. The Saiyan Prince Vegeta further expanded Goku’s understanding of what it means to be Saiyan.",
    "On Earth, Goku married Chi-Chi, and their union brought forth two remarkable sons: Gohan, the scholar-warrior who harnessed both intellect and strength, and Goten, who carried his father’s joyful spirit and untapped potential."
  ],
  Transformations: [
    {
      title: "Base Form",
      description: "The foundation of his strength, balancing agility, technique, and heart.",
      image: "/images/base.png"
    },
    {
      title: "Super Saiyan",
      description: "A golden-haired state that unleashes explosive power beyond normal Saiyan capabilities.",
      image: "/images/ss1.webp"
    },
    {
      title: "Super Saiyan 2",
      description: "An enhanced version of the Super Saiyan transformation, Super Saiyan 2 is characterized by increased power, speed, and energy output. Visually, it features more rigid, upright golden hair and a more intense aura, often accompanied by electrical sparks. Gohan was the first to achieve this form during his battle with Cell in the Cell Games.",
      image: "/images/ss2.webp"
    },
    {
      title: "Super Saiyan 3",
      description: "This transformation further amplifies a Saiyan's strength and speed but comes with a significant increase in energy consumption, making it difficult to maintain for extended periods. Distinctive features include a dramatic lengthening of the golden hair, reaching down to the waist or beyond, and the absence of eyebrows, giving the Saiyan a more intimidating appearance. Goku first attained Super Saiyan 3 during his training in Other World.",
      image: "/images/ss3.webp"
    },
    {
      title: "Super Saiyan God & Blue",
      description: "Divine forms that channel godly ki, granting Goku transcendent abilities.",
      image: "/images/ssgod.jpg"
    },
    {
      title: "Ultra Instinct",
      description: "The pinnacle of martial perfection, where instinct supersedes thought, making him nearly untouchable.",
      image: "/images/ui.webp"
    },
  ],
  References: [
    {
      title: "Dragon Ball Series",
      description: "Kakarot, better known as Goku, originates from Akira Toriyama’s celebrated \"Dragon Ball\" universe. His adventures span \"Dragon Ball,\" \"Dragon Ball Z,\" \"Dragon Ball GT,\" \"Dragon Ball Super,\" and the latest \"Dragon Ball Daima\", which premiered in late 2024.",
      image: "/images/db.png"
    },
    {
      title: "Video Games",
      description: "Goku's legacy shines in titles like \"Dragon Ball FighterZ,\" \"Dragon Ball Z: Kakarot,\" and the latest \"Dragon Ball Sparking! Zero\" with a vast roster of 182 characters. These games allow fans to relive and expand on his epic journey.",
      image: "/images/game.png"
    },
    {
      title: "Guest Appearances",
      description: "Goku has appeared in other anime like \"Dr. Slump,\" assisting Arale against foes, and even transforming into a Great Ape. In 2024, he made a cameo in \"The Elusive Samurai,\" showcasing his cultural impact.",
      image: "/images/cameo.webp"
    },
    {
      title: "Global Influence",
      description: "Blending Chinese mythology, intergalactic adventure, and martial arts, Goku stands as a global icon inspiring generations through his epic battles and heartfelt moments.",
      image: "/images/chadgoku.png"
    }
  ]
};

export default function AboutSection() {
  return (
    <div
      className="relative py-12 bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/goku2.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

      <div className="relative container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Kakarot on SOL</h2>
        <Image
          src="/images/goku2.png"
          alt="Goku About"
          width={300}
          height={300}
          className="rounded-lg mx-auto mb-8 object-cover"
        />
        <div className="p-6 bg-white/10 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.5)] rounded-lg mb-8">
          <p className="text-lg leading-relaxed text-white mb-4">
          Upon his arrival on Earth, the infant is discovered by Son Gohan, who becomes the adoptive grandfather of the boy and gives him the name Goku. The boy is initially full of violence and aggression due to his Saiyan nature, until an accidental head injury turns him into a cheerful, carefree person.
          </p>
          <p className="text-lg leading-relaxed text-white">
            This metamorphosis laid the foundation for the legendary hero Goku would become. He embraced Earth as his home, protecting it from looming threats while pushing his abilities beyond any imaginable limit. His story is one of courage, perseverance, and the enduring power of friendship.
          </p>
        </div>

        <TabGroup>
        <TabList className="flex justify-center space-x-4 mb-6">
  {(Object.keys(categories) as Category[]).map((category) => (
    <Tab key={category}>
      {({ selected }) => (
        <div
          className={classNames(
            "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
            selected
              ? "bg-orange-500 text-white shadow-[1px_1px_3px_black]"
              : "bg-gray-800 bg-opacity-30 text-gray-300 backdrop-blur-lg border border-gray-600"
          )}
        >
          {category}
        </div>
      )}
    </Tab>
  ))}
</TabList>


          <TabPanels>
            {(Object.entries(categories) as [Category, (string | { title: string; description: string; image: string })[]][]).map(([category, content], idx) => (
              <TabPanel
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.5)] rounded-lg"
                style={{ minHeight: '60vh' }}
              >
                {category !== "Transformations" && category !== "References" ? (
                  <>
                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                      {tabImages[category].map((imgSrc, index) => (
                        <div key={index} className="relative w-[400px] h-[300px] overflow-hidden rounded-lg">
                          <Image
                            src={imgSrc}
                            alt={`${category} Image ${index + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className={`rounded-lg`}
                          />
                        </div>
                      ))}
                    </div>
                    {content.map((post, i) => (
                      typeof post === 'string' ? (
                        <p key={i} className="mb-4 leading-relaxed">{post}</p>
                      ) : null
                    ))}
                  </>
                ) : (
                  <div className="space-y-8">
                    {(content as { title: string; description: string; image: string }[]).map((item, i) => {
                      const isEven = i % 2 === 0;
                      return (
                        <div
                          key={i}
                          className={classNames(
                            "flex items-center gap-4",
                            isEven ? "flex-row" : "flex-row-reverse"
                          )}
                        >
                          <div className="relative  w-[400px] h-[300px] flex-shrink-0 rounded-[10px] overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              className={`rounded-lg`}
                              fill
                              style={{ objectFit: 'contain' }}
                            />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
