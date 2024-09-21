import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    Are the treatments at Meow Aesthetic Clinic suitable for all skin types?
                </AccordionTrigger>
                <AccordionContent>
                    {`Yes, the treatments at Meow Aesthetic Clinic are designed to be effective for various skin types. The clinic tailors its services to meet individual skin needs and conditions.`}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    How can I book a consultation for a specific treatment?
                </AccordionTrigger>
                <AccordionContent>
                    {`You can book a consultation by calling +65 1212 7358 or by filling out the contact form on the Meow Aesthetic Clinic website. The clinic staff will guide you through the available treatment options and help you choose the best one for your needs.`}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    What should I expect during my first consultation?
                </AccordionTrigger>
                <AccordionContent>
                    {`During your first consultation, Dr. Meow will assess your skin condition, discuss your aesthetic goals, and recommend suitable treatments. You'll receive detailed information about the procedures, expected results, and any necessary aftercare.`}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
