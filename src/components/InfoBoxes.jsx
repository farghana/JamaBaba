import InfoBox from "./InfoBox";

const InfoBoxes = () => {
	return (
		<section>
			<div className='container-xl lg:container m-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
					<InfoBox
						heading='For Buyers'
						backgroundColor='bg-gray-100'
						textColor='text-gray-800'
						buttonInfo={{
							text: "Browse Deals",
							link: "/deals",
							backgroundColor: "bg-black",
						}}
					>
						Discover the perfect deal that suits your needs.
					</InfoBox>

                    <InfoBox
						heading='For Suppliers'
						backgroundColor='bg-blue-100'
						textColor='text-gray-800'
						buttonInfo={{
							text: "Add Deals",
							link: "/deals/add",
							backgroundColor: "bg-blue-500",
						}}
					>
						Add your deals and reach potentail buyers.
					</InfoBox>
				</div>
			</div>
		</section>
	);
};

export default InfoBoxes;
