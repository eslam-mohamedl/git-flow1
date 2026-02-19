import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function FeaturesSection() {
  return (
    <div className="ds-bg p-7 flex justify-center flex-col items-center">
      <Title className="bg-green-600">FeaturesSection</Title>
      <Text size="md">
        This section represents the FeaturesSection of the website.
      </Text>
      <Text size="md" className="text-green-400">
        created by : Eslam Mohamed
      </Text>
    </div>
  );
}
