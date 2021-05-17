/* The chat const defines the Peekobot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
    1: {
        text: "Hi there! I'm the race and modern architecture chatbot. Nice to meet you! 👋",
        next: 2
    },
    2: {
        text: "This is an choice-driven chatbot. Use the options below to guide the conversation.",
        options: [
            {
                text: "Cool! Hi 👋",
                next: 3
            }
        ]
    },
    3: {
        text: "How can I help you?",
        options: [
            {
                text: "I’d like to find out whether an architecture project is racist",
                next: 4
            },
        ]
    },
    4: {
        text: 'Cool! Let’s hold off on labels for now, but I can offer some examples that might help you to evaluate a project',
        options: [
            {
                text: "Sounds great!",
                next: 5
            }
        ]
    },
    5: {
        text: 'Is it your own project you’re interested in, or someone else’s?',
        options: [
            {
                text: "My own project",
                next: 6
            },
            {
                text: "Someone else's project",
                next: 8
            }
        ]
    },
    6: {
        text: 'Awesome!',
        next: 7
    },
    7: {
        text: "It’s not as though there’s any shortage of things an architect has to think about 🙄 but it’s a good move to think about how your work might intersect with racism or social justice, and the earlier in the process, the better!",
        next: 9
    },
    8: {
        text: "Terrific! 🙌 You can learn a lot about architecture by studying and comparing examples, and this is no exception.",
        next: 9
    },
    9: {
        text: "Here are four topics to get you started. Start anywhere. You can always come back and explore another one.",
        options: [
            {
                text: "Who is the project for?",
                next: 10
            },
            {
                text: "Where is the project located?",
                //set next
            },
            {
                text: "What type of project is it?",
                //set next
            },
            {
                text: "What are the project's financial parameters?",
                //set next
            }
        ]
    },
    10: {
        text: 'Great! A key concept here is the project’s "addressivity,” or who the project’s presumed audience is as compared to its actual audience.',
        next: 11
    },
    11: {
        text: "Has the project been built, or is it under construction?",
        options: [
            {
                text: "It's already finished",
                next: 12
            },
            {
                text: "It's in a design or construction phase",
                next: 13
            }
        ]
    },
    12: {
        text: "Okay! Take a minute to think about the audience for the project. Think about who the space is designed for.",
        next: 14
    },
    13: {
        text: "In that case, we don’t know for sure who will use it, but maybe you can guess.",
        next: 14
    },
    14: {
        text: "Thinking about addressivity is an important step towards helping you design for the people who will actually occupy the spaces you’re creating.",
        options: [
            {
                text: "How do I know who will occupy my project?",
                next: 15
            }
        ]
    },
    15: {
        text: "One way is to look at the demographics. Demographics are statistical data relating to the population and particular groups within it, including data on income and race/ethnic makeup. Are you interested in learning the demographics of your site?",
        options: [
            {
                text: "Yes",
                next: 16
            }
        ]
    },
    16: {
        text: "Check Out this link! <a target='_blank' href='https://www.incomebyzipcode.com'>https://www.incomebyzipcode.com</a> You can find the median income for the ZIP code your project islocated in.",
        next: 17
    },
    17: {
        text: "You can also search Wikipedia by location to see the percentage of BIPOC residents: <a target='_blank' href='https://www.wikipedia.org'>https://www.wikipedia.org</a>",
        options: [
            {
                text: "Cool! I understand who is living there",
                next: 18
            },
            {
                text: "I want to know more about how my project might impact the neighborhood based on the demographics of the area.",
                next: 19
            }
        ]
    },
    18: {
        text: "Want to explore another topic?",
        options: [
            {
                text: "Sure, why not?",
                next: 19
            },
            {
                text: "Nope, I'm done",
                //next: 
            }
        ]
    },
    19: {
        text: "Well, here’s another question. Does your project displace anyone?",
        options: [
            {
                text: "I'm not sure. How would a project displace people?",
                next: 20
            }
        ]
    },
    20: {
        text: "The term “eminent domain” refers to the right of a government or its agent to expropriate private property for public use. Payment or compensation is necessary, but it still compels people to leave.",
        next: 21
    },
    21: {
        text: "“Buyouts” occur when a third party offers to buy properties of low value.",
        next: 22
    },
    22: {
        text: "Low property value does not signify that the community is not thriving. In many cases, systematic racism has produced neighborhoods with low property values, but people who live there might value their community.",
        next: 23
    },
    23: {
        text: "<img class='botImage' src='docs/images/mill-creek-1.jpeg'>",
        next: 24
    },
    24: {
        text: "This is Mill Creek Valley in St. Louis, an example of a black community whose residents were forced out after their neighborhood was declared to be blighted. Worse still, the projects that replaced it were not successful and it is still mostly empty. This is a picture of Mill Creek Valley today:",
        next: 25
    },
    25: {
        text: "<img class='botImage' src='docs/images/mill-creek-2.jpeg'>",
        next: 26
    },
    26: {
        text: "Then there’s gentrification. Through gentrification, home values are increased so much that the neighborhoods are not affordable for the residents who eventually lived there.",
        next: 27
    },
    27: {
        text: "It’s a good idea to keep in mind BOTH who the project was designed for AND those who already live there.",
        options: [
            {
                text: "Wow, it seems like projects can have a lot of negative impacts on people 😳",
                next: 28
            }
        ]
    },
    28: {
        text: "Would you like to see a few more examples?",
        options: [
            {
                text: "I’d like to explore another topic instead",
                next: 29
            },
            {
                text: "Sure",
                next: 30
            },
            {
                text: "I’m done for now"
                //set next
            },
            {
                text: "Ask me another question about who the project is for",
                next: 41
            }
        ]
    },
    29: {
        text: "Sure, here are the four topics to explore:",
        options: [
            {
                text: "Who is the project for?",
                next: 10
            },
            {
                text: "Where is the project located?",
                //set next
            },
            {
                text: "What type of project is it?",
                //set next
            },
            {
                text: "What are the project's financial parameters?",
                //set next
            }
        ]
    },
    30: {
        text: "<img class='botImage' src='docs/images/airport.jpg'>",
        next: 31
    },
    31: {
        text: "Saint Louis Lambert International Airport: Displaced residents of Kinloch (Missouri's first black city). Kinloch was a vibrant and flourishing black community in the 19th and 20th century",
        next: 32
    },
    32: {
        text: "The construction of the airport used eminent domain and buyouts. Targeting property value but black communities tended to be of lower value.",
        next: 33
    },
    33: {
        text: "The population declined rapidly, going from 6,500 residents in 1960 to 290 residents in 2019.",
        next: 34
    },
    34: {
        text: "In this case race played a role in shaping modern architecture.",
        next: 35
    },
    35: {
        text: "But the concept of class also played a role in who was displaced; additionally, many white residents of a town called Carrolton were displaced by this project.",
        next: 36
    },
    36: {
        text: "Thus, it's always important to look at WHO is displaced and WHO the architecture is for!",
        next: 37
    },
    37: {
        text: "Want to hear about another example?",
        options: [
            {
                text: "I’d like to explore another topic instead",
                next: 29
            },
            {
                text: "Sure",
                next: 38
            },
            {
                text: "I’m done for now"
                //set next
            },
            {
                text: "Ask me another question about who the project is for",
                next: 41
            }
        ]
    },
    38: {
        text: "<img class='botImage' src='docs/images/marina-city.jpg'>",
        next: 39
    },
    39: {
        text: "Marina City: The complex was constructed between 1961 and 1968 at a cost of $36 million, financed to a large extent by Building Service Employees International Union, a union of building janitors and elevator operators, who sought to reverse the pattern of white flight from the city's downtown area.",
        next: 40
    },
    40: {
        text: "In this case, the project was designed to counteract gentrification",
        next: 41
    },
    41: {
        text: "Here's another question. Was this project designed with the community's input?",
        options: [
            {
                text: "No, there was no community input",
                next: 42
            },
            {
                text: "Yes, it was!",
                next: 43
            }
        ]
    },
    42: {
        text: "Too bad! Projects that give local residents a say in the decision-making can help to empower the community. It's also a way to understand the needs of the community, and to create a project that would benefit the surrounding area.",
        next: 44
    },
    43: {
        text: "That's awesome! Projects that gather community input have a better understanding of the needs of the community, and can try to benefit the surrounding community through their project.",
        next: 44
    },
    44: {
        text: "A community land trust is a great example of a project that uses community input in the development of the project. Community land trusts are generally non-profit organizations that serve communities by providing affordable housing.",
        next: 45
    },
    45: {
        text: "For more information on community land trusts and how they  avoid displacement and provide long term affordability, check out: <a href'https://www.beyondhousing.org'>https://www.beyondhousing.org</a>",
        next: 46
    },
    46: {
        text: "Want to hear about another example?",
        options: [
            {
                text: "I’d like to explore another topic instead",
                next: 29
            },
            {
                text: "Sure",
                next: 47
            },
            {
                text: "I’m done for now"
                //set next
            }
        ]
    },
    47: {
        text: "<img class='botImage' src='docs/images/lincoln-center.jpg'>",
        next: 48
    },
    48: {
        text: "Lincoln Center in New York: The stage for the neighborhood’s destruction was set in the 1940s, when the New York City Housing Authority had named Lincoln Square and San Juan Hill the worst slum in the city.",
        next: 49
    },
    49: {
        text: "By the end of that decade, part of it had been cleared for the Amsterdam Houses (which still stand behind the Metropolitan Opera between West 61st and 65th Streets, from Amsterdam to West End Avenue).",
        next: 50
    },
    50: {
        text: "Eventually, The Mayor’s Committee on Slum Clearance, helmed by Robert Moses, officially declared the area a slum, which enabled Moses to utilize eminent domain to put forth a new plan for another large swath of the neighborhood, and in 1956 the Lincoln Center: Lincoln Square Development Plan was approved.",
        next: 51
    },
    51: {
        text: "It took advantage of Title I of the 1949 Federal Housing Act to acquire essentially an L-shaped, piece of land for private development. The project displaced more than 7,000 families and 800 businesses.",
        next: 52
    },
    52: {
        text: "That’s it for “who.” What would you like to chat about next?",
        options: [
            {
                text: "I’d like to explore another topic",
                next: 29
            },
            {
                text: "I’m done for now"
                //set next
            }
        ]
    }
};
