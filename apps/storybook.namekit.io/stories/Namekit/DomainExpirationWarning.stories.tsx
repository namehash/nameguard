import type { Meta, StoryObj } from "@storybook/react";
import { DomainExpirationWarning } from "@namehash/namekit-react";
import { DomainStatus, getMockedDomainCard } from "./utils";
import { buildAddress } from "@namehash/ens-utils";

const meta: Meta<typeof DomainExpirationWarning> = {
  component: DomainExpirationWarning,
  title: "Namekit/DomainExpirationWarning",
  parameters: {
    layout: "centered",
  },
  args: {
    viewerAddress: null,
    domain: getMockedDomainCard({ domainStatus: DomainStatus.ExpiringSoon }),
  },
};

export default meta;

type Story = StoryObj<typeof DomainExpirationWarning>;

export const DomainFarFromExpiring: Story = {
  args: {
    domain: getMockedDomainCard({ domainStatus: DomainStatus.Normal }),
  },
};

export const OnlyIconForADomainExpiringSoon: Story = {
  args: {
    domain: getMockedDomainCard({ domainStatus: DomainStatus.ExpiringSoon }),
  },
};

export const IconAndTextForADomainExpiringSoon: Story = {
  args: {
    onlyIcon: false,
    domain: getMockedDomainCard({ domainStatus: DomainStatus.ExpiringSoon }),
  },
};

export const OnlyIconForADomainExpired: Story = {
  args: {
    viewerAddress: buildAddress("0x1a199654959140E5c1A2F4135fAA7Ba2748939C5"),
    domain: getMockedDomainCard({
      domainStatus: DomainStatus.Expired,
      onlyIcon: false,
    }),
  },
};

export const IconAndTextForADomainExpired: Story = {
  args: {
    onlyIcon: false,
    viewerAddress: buildAddress("0x1a199654959140E5c1A2F4135fAA7Ba2748939C5"),
    domain: getMockedDomainCard({
      domainStatus: DomainStatus.Expired,
      onlyIcon: false,
    }),
  },
};

export const OnlyIconForADomainExpiredWhenDisplayingForDomainOwner: Story = {
  args: {
    viewerAddress: buildAddress("0x1a199654959140E5c1A2F4135fAA7Ba2748939C5"),
    domain: getMockedDomainCard({ domainStatus: DomainStatus.Expired }),
  },
};

export const IconAndTextForADomainExpiredWhenDisplayingForDomainOwner: Story = {
  args: {
    onlyIcon: false,
    viewerAddress: buildAddress("0x1a199654959140E5c1A2F4135fAA7Ba2748939C5"),
    domain: getMockedDomainCard({ domainStatus: DomainStatus.Expired }),
  },
};

export const OnIconClickHandler: Story = {
  args: {
    onIconClickHandler: () => alert("Icon was clicked!"),
  },
};

export const OnIconClickHandlerEvenInTextMode: Story = {
  args: {
    onlyIcon: false,
    onIconClickHandler: () => alert("Icon was clicked!"),
  },
};
