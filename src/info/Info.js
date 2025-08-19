import self from "../img/self.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Jacky",
    lastName: "Fan",
    initials: "jf", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Cloud Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Aotearoa'
        },
        {
            emoji: "💼",
            text: "Cloud Engineer at Amazon Web Services"
        },
        {
            emoji: "🏆",
            text: "AWS CloudFormation SME"
        },
        {
            emoji: "🏆",
            text: "AWS CodeSuite SME"
        },
        {
            emoji: "🏆",
            text: "AWS Control Tower SME"
        },
        {
            emoji: "📧",
            text: "jacky@fan.nz"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/fanq10",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/fanq101/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/orgs/aws-6w8hnx/repositories",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/fanq10/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/fanq10",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Jacky. I'm a cloud engineer for Amazon. I studied CompSci at Auckland University of Technology, I enjoy skiing on snow mountains and exploring alpine scenery, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['terraform', 'aws cdk', 'aws cloudformation','kubernetes', 'docker', 'ci/cd pipelines', 'github', 'control tower', 'automation', 'azure'],
            exposedTo: ['nodejs', 'python', 'java', 'typescript']
        }
    ,
    hobbies: [
        {
            label: 'travel',
            emoji: '🛫'
        },
        {
            label: 'skiing',
            emoji: '🎿'
        },
        {
            label: 'photography',
            emoji: '📸'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Jacky F | Portfolio",
            live: "https://jacky.fan.nz/",
            source: "https://github.com/fanq10/fanq10.github.io/tree/main",
            image: mock2
        },
        {
            title: "AWS CDK workshop",
            live: "https://repost.aws/knowledge-center/cdk-cross-stack-reference",
            source: "https://github.com/aws-6w8hnx/cdk-workshop-cross-stack-reference",
            image: mock4
        },
        {
            title: "AWS CodeDeploy workshop",
            live: "https://docs.aws.amazon.com/codedeploy/latest/userguide/tutorials.html",
            source: "https://github.com/aws-6w8hnx/code-workshop-ecs-lambda-codedeploy",
            image: mock4
        },
        {
            title: "AWS Control Tower AFT workshop",
            live: "https://docs.aws.amazon.com/controltower/latest/userguide/aft-architecture.html",
            source: "https://github.com/aws-6w8hnx/controltower-workshop-aft",
            image: mock3
        },
    ]
}
