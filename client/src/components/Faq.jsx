import { Accordion,AccordionButton,AccordionPanel,AccordionIcon, AccordionItem, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
    <div>
        <Box bgColor={"white"} fontFamily={"Aclonica"} w={"80vw"} m={"6"} rounded={"20px"}>
            <Heading p={"10"} fontFamily={"Aclonica"}>FAQ</Heading>
            <Accordion p={"2"} whiteSpace={"balance"} defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' fontSize={"larger"}>
        Q . What is Wheelie Whoops?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"Highlight"} fontSize={"18px"}>
    Wheelie Whoops is a platform that celebrates the lighter side of motorcycle stunts. It’s a curated collection of entertaining and sometimes downright comical moments where riders attempt wheelies, jumps, and tricks but end up with unexpected outcomes. From unintentional dismounts to gravity-defying mishaps, Wheelie Whoops captures it all.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' fontSize={"larger"}>
          Q . Do I need to register to use Wheelie Whoops ? 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"Highlight"}>
    Yes, registration is recommended if you want to fully immerse yourself in the world of bike stunt fails. By creating an account on Wheelie Whoops, you gain access to personalized features. You can rate the stunts, contribute your own content, and engage with fellow motorcycle enthusiasts who appreciate the art of unintentional comedy.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' fontSize={"larger"}>
          Q . Can I edit or remove my own stunt fail posts? 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"Highlight"}>
    Absolutely! Wheelie Whoops empowers you to manage your own content. Once you’re logged in, feel free to edit or delete your stunt fail posts at any time. Whether you’ve captured a spectacular fail or a hilarious blooper, you’re in control of sharing those memorable moments with the community.
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' fontSize={"larger"}>
          Q . Is Wheelie Whoops mobile-friendly?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"Highlight"}>
    Yes, indeed! Wheelie Whoops is designed to be mobile-friendly. Whether you’re browsing on your computer, tablet, or smartphone, you can easily access the side-splitting bike stunt fails. So, buckle up (or maybe not) and enjoy the laughter-filled ride! 🏍️😄
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='center' fontSize={"larger"}>
          Q . What’s the most epic bike stunt fail ever captured on Wheelie Whoops?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color={"Highlight"}>
    While we can’t pick just one, Wheelie Whoops has seen its fair share of jaw-dropping, gravity-defying, and downright hilarious stunt fails. From failed wheelies to unexpected dismounts, the community shares their favorite moments. Explore the archives and see which stunt fail leaves you in stitches! 🏍️😂
        </AccordionPanel>
  </AccordionItem>
</Accordion>
        </Box>
    </div>
  )
}

export default Faq