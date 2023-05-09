/** @format */
'use client';

import { Box, SxProps, Theme, Tooltip, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import photo from './asstets/photo.avif';
import Img from './asstets/img.avif';
import Link from 'next/link';
import { Anchor } from 'antd';

function singlePage() {
	return (
		<Box position={'relative'} width={'100%'}>
			<Box>
				<Box sx={blogBoxSx}>
					<Image
						src={photo}
						alt='background'
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
							objectPosition: 'center',
						}}
					/>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						top: { xs: '50px', sm: '100px', md: '150px', lg_xl: '200px' },
						left: 0,
						right: 0,
						justifyContent: 'center',
						margin: 'auto',
						textAlign: 'center',
						display: 'flex',
					}}
				>
					<Typography
						sx={{
							fontSize: { xs: '22px', md: '28px', lg_xl: '38px' },
							fontWeight: 700,
							lineHeight: { xs: '27px', md: '37px', lg_xl: '57px' },
							color: '#fff',
							width: { xs: '80%', md: '60%' },
						}}
					>
						How We Can Correct Mankind’s Leaderboard
					</Typography>
				</Box>
			</Box>
			<Box
				sx={{
					display: { xs: 'block', lg_xl: 'flex' },
					gap: 4,
					margin: '50px auto 50px auto',
				}}
			>
				<Box width={{ xs: '100%', lg_xl: '20%' }}>
					<Box display={{ xs: 'none', lg_xl: 'block' }}>
						<Anchor
							style={{
								fontSize: '18px',
								fontWeight: 500,
								color: '#000',
								padding: '15px 10px',
								backgroundColor: '#fff',
								borderRadius: '15px',
								marginTop: '20px',
							}}
							items={[
								{
									key: 'overview_of_the_problem',
									href: '#overview_of_the_problem',
									title: 'Overview of The Problem',
								},
								{
									key: 'a_deeper_drive',
									href: '#a_deeper_drive',
									title: 'A Deeper Dive',
								},
								{
									key: 'the_simple_solution',
									href: '#the_simple_solution',
									title: 'The Simple Solution',
								},
								{
									key: 'Bringing_The_Inevitable_Future_Forward',
									href: '#Bringing_The_Inevitable_Future_Forward',
									title: 'Bringing The Inevitable Future Forward',
								},
								{
									key: 'We_have_a_coordination_test_for_humanity',
									href: '#We_have_a_coordination_test_for_humanity',
									title: 'We have a coordination test for humanity',
								},
							]}
						/>
					</Box>
					<Box display={{ xs: 'block', lg_xl: 'none' }}>
						<Anchor
							style={{
								fontSize: '18px',
								fontWeight: 500,
								color: '#000',
								padding: '15px 10px',
								backgroundColor: '#fff',
								borderRadius: '15px',
								marginTop: '0px',
							}}
							items={[
								{
									key: 'overview_of_the_problem',
									href: '#overview_of_the_problem',
									title: 'Overview of The Problem',
								},
								{
									key: 'a_deeper_drive',
									href: '#a_deeper_drive',
									title: 'A Deeper Dive',
								},
								{
									key: 'the_simple_solution',
									href: '#the_simple_solution',
									title: 'The Simple Solution',
								},
								{
									key: 'Bringing_The_Inevitable_Future_Forward',
									href: '#Bringing_The_Inevitable_Future_Forward',
									title: 'Bringing The Inevitable Future Forward',
								},
								{
									key: 'We_have_a_coordination_test_for_humanity',
									href: '#We_have_a_coordination_test_for_humanity',
									title: 'We have a coordination test for humanity',
								},
							]}
						/>
					</Box>
				</Box>
				<Box
					width={{ xs: '100%', lg_xl: '80%' }}
					sx={{
						backgroundColor: '#fff',
						color: '#000',
						padding: '20px',
						borderRadius: '15px',
					}}
				>
					<Box>
						<Tooltip title='HTTPS' placement='left'>
							<Typography
								id='overview_of_the_problem'
								sx={{
									fontSize: { xs: '22px', lg_xl: '28px' },
									fontWeight: 500,
									lineHeight: { xs: '27px', lg_xl: '67px' },
									color: '#000',
									mb: '15px',
								}}
							>
								Overview of The Problem:
							</Typography>
						</Tooltip>

						<Typography sx={typoParaSx}>
							The fact that our designer goods do not represent wealth for
							positive utility is having more negative damage to society than we
							can fathom. This article is going to help detail why, and detail
							our solution in progress.
						</Typography>
						<Typography sx={typoParaSx}>
							As individuals, once we cover our basic needs, status becomes an
							intrinsic motivator in the rest of our actions. Status comes in
							many forms. The healthiest / most enlightened cultures put the
							highest status in rewarding positive sum behavior. In global
							culture, luxury goods like a Gucci bag/belt have become widespread
							as top status symbols, reflecting vapid use of money as the
							highest form of status. It has become such common Christmas list
							item for broke young teenagers that the
							<Link
								style={{ textDecoration: 'underline', padding: '0px 5px' }}
								href='https://www.businesstoday.in/visualstories/technology/who-is-bernard-arnault-meet-worlds-richest-person-alive-who-once-again-beat-elon-musk-24896-03-03-2023'
							>
								richest man on the planet
							</Link>
							at the time of this writing got his riches from selling these
							overpriced goods representing nothing more than the ability to
							waste money. Collectively this misrepresentation of true status
							(service to others) is attributing more damage to building a
							healthy positive culture than we can imagine.
						</Typography>
						<Typography sx={typoParaSx}>
							Social media, our emergent global cultural production system,
							could be used collectively to unify humanity around bettering
							ourselves and others. Instead it is used to further extract youth
							through a false form of{' '}
							<Link
								style={{ textDecoration: 'underline', padding: '0px 5px' }}
								href='https://www.eugenewei.com/blog/2019/2/19/status-as-a-service'
							>
								status as a service.
							</Link>
							Imagine a world where this wasteful spending was considered
							cancelable. One where we collectively take accountability for the
							capability to money to the positive growth of us as a species.
							Imagine a world where the designer things we wore showed off
							spending a lot of money to make a lot of positive impact. If the
							world you imagined only went as far as to redistribute the wealth
							of designer wear, try imagining the deeper cultural effects this
							new alignment would have.
						</Typography>
						<Box sx={{ borderLeft: '4px solid #11006c' }}>
							<blockquote>
								<Typography sx={typoblockquoteSx}>
									“Over the past hundred years we have increase the global GDP
									sevenfold, yet wealth inequality continues to skyrocket and
									luxury spending grows rapidly. In order to change the failure
									of redistribution of wealth at scale, we must effectively
									influence culture and help redefine what “status” is in the
									modern age. This will ultimately change the flow of money in
									society as the new age of status being helping the world,
									becomes more prominent. We have failed at building a society
									which healthily distributes wealth/power. Given society is a
									collective project we are responsible for, we think this stems
									from the culture not supporting doing good as the highest form
									of status. We have more than enough resources, but many people
									without access to them, and a culture that motivates and
									glorifies overspending on vanity luxury goods.” -{' '}
									<Link
										style={{ textDecoration: 'underline', padding: '0px 5px' }}
										href='https://jackjay.io/'
									>
										Jack Jay
									</Link>
								</Typography>
							</blockquote>
						</Box>
						<Tooltip title='HTTPS' placement='left'>
							<Typography
								id='a_deeper_drive'
								sx={{
									fontSize: { xs: '22px', lg_xl: '28px' },
									fontWeight: 500,
									lineHeight: { xs: '27px', lg_xl: '67px' },
									color: '#000',
									mb: '15px',
								}}
							>
								A Deeper Dive:
							</Typography>
						</Tooltip>
						<Typography sx={typoParaSx}>
							On a fundamental level once someone gets the basics covered as in
							food, water, shelter. They can start to spend their time and money
							on convenience, health, and purpose but more often than not;
							status is where a majority of surplus wealth goes.
						</Typography>
						<Typography sx={typoParaSx}>
							Societally we lack an alignment of our status symbols with
							creating a better world and with bettering ourselves. This idea to
							change what we cultural see as status has been referred to as
							“Status Engineering”.
						</Typography>
						<Typography sx={typoParaSx}>
							What we wear is the most direct way we have to represent ourselves
							and our ideals/values. What your role model wears, or any person
							of influence is shaping the idea of status in that child,
							teenager, or adults mind.
						</Typography>
						<Typography sx={typoParaboldSx}>
							Status is what we are buying when we pay $1, $10, or even $500
							extra for a certain brand of T-Shirt irrespective of comfort.
						</Typography>
						<Typography sx={typoParaSx}>
							The problem is not that buying status is a failure mode of an
							individual. Status is a form of positive competitive drive in
							society and a tool for respect attribution. That’s why you see
							Dior shoes in economy. This is not a miscalculation, currently the
							status from spending $1100 on shoes does have more long term value
							than things like first class because we are playing the game of
							unenlightened capitalism.
						</Typography>
						<Typography sx={typoParaSx}>
							The problem is that we support the status symbol which costs $1100
							and does no good for humanity. Thus this expenditure is not a
							failure of the buyer who bought status, it is only misguided that
							we do not have designer shoes that cost $1100, which builds a
							literal house in Bangladesh (a small home can be built as a
							permanent structure for someone for this amount). We need higher
							forms of status to exist in order to progress our culture which
							will aid in the distribution of wealth and power on a systemic
							level.
						</Typography>
						<Typography sx={typoParaSx}>
							Once higher status objects are unveiled will these purely
							financial status seems become recognized for their tackiness and
							buying status will coincide with doing good. With no better
							alternative currently, we idolize symbols of wealth. Thus, on our
							highest display of who we are, the clothing we wear, we display 0
							creativity or care for the world in spending and instead promote
							wasting wealth for the sake of power/leverage over others, and
							then we wonder why society is misaligned to building a healthy
							world. Fashion, what we wear, is the biggest signal we have in
							representing our identity and values.
						</Typography>
						<Typography sx={typoParaSx}>
							If we can provide a better representation of status in clothing we
							can not only change the money used to buy status into doing good
							for the world, but we can change our core representation of status
							in society towards doing good.
						</Typography>
						<Typography sx={typoParaSx}>
							While the larger belief is that this systemic change is the real
							impact in realigning our culture towards true status, the amount
							of funds in status spending that could be redirected towards
							positive causes is also no joke.
						</Typography>
						<Box sx={{ borderLeft: '4px solid #11006c' }}>
							<Typography sx={typoblockquoteSx}>
								The personal luxury goods market is projected to grow from USD
								<Link
									style={{ textDecoration: 'underline', padding: '0px 5px' }}
									href='https://www.fortunebusinessinsights.com/luxury-goods-market-103866'
								>
									257.26 billion in 2020 to USD 352.84 billion in 2027
								</Link>
							</Typography>
						</Box>
						<Box sx={{ borderLeft: '4px solid #11006c' }}>
							<Typography sx={typoblockquoteSx}>
								The Luxury Cars Market size is expected to grow from
								<Link
									style={{ textDecoration: 'underline', padding: '0px 5px' }}
									href='https://www.globenewswire.com/en/news-release/2022/09/19/2518123/0/en/Luxury-Cars-Market-Size-Worth-USD-655-0-Billion-Globally-by-2027-at-9-3-CAGR.html#:~:text=The%20Luxury%20Cars%20Market%20size,9.3%25%20from%202020%20to%202027.&text=Pune%2C%20India%2C%20Sept.,by%20the%20end%20of%202027.'
								>
									USD 449.7 Billion in 2019 to USD 655.0 Billion by 2027; It is
									estimated to grow at a CAGR of 9.3% from 2020 to 2027.
								</Link>
							</Typography>
						</Box>
						<Typography sx={typoParaSx}>
							Aligning status culturally on a global scale means reattributing
							that wealth towards benefit for humanity and shifting the entire
							global view of wealth.
						</Typography>
						<Tooltip title='HTTPS' placement='left'>
							<Typography
								id='the_simple_solution'
								sx={{
									fontSize: { xs: '22px', lg_xl: '28px' },
									fontWeight: 500,
									lineHeight: { xs: '27px', lg_xl: '67px' },
									color: '#000',
									mb: '15px',
								}}
							>
								The Simple Solution
							</Typography>
						</Tooltip>
						<Typography sx={typoParaboldSx}>
							Thought experiments make it obvious that this idea is memetic, and
							just has not been tried in the market. Once one initial company
							opens up this model, many more will follow and copy:
						</Typography>
						<Typography sx={typoParaSx}>
							For the same price as a Louie Vuitton bag, a permanent shelter can
							be built in Bangladesh for a family in need. This gives rise to
							the idea that anytime someone walks into a designer store and
							purchased an item, they are having to burn down a house (most
							making this decision unknowingly).
						</Typography>
						<Typography sx={typoParaSx}>
							Based on the principle “if a penny saved is a penny earned” we can
							extrapolate that to a Louie bag is a home burned. But just telling
							someone not to flex is not going to solve the problem. If we
							really want to win this war, we just need to sell higher status,
							for the same price.
						</Typography>
						<Box sx={blogImageBoxSx}>
							<Image
								src={Img}
								alt='image'
								style={{
									objectFit: 'cover',
									width: '100%',
									height: '100%',
									objectPosition: 'center',
								}}
							></Image>
						</Box>
						<Typography sx={typoParaSx}>
							Imagine trying to connect with a luxury purse buyer as protestors
							outside of a designer store. Rather than simply protesting their
							spending on that good, we need to sell them a better version of
							what they are buying.
						</Typography>
						<Typography sx={typoParaSx}>
							Protests outside of stores that sell meat where stands are set up
							showing customers videos of the harmed animals may not be a great
							way to connect with the target audience, and often cause a greater
							divide in mindsets.
						</Typography>
						<Typography sx={typoParaSx}>
							In this case volunteers or employees could stand outside of luxury
							goods markets, sporting the aligned luxury merch. Rodeo drive for
							example is a notorious spot where every designer store not only
							has a shop, but theres a steady flow of customers.
						</Typography>
						<Typography sx={typoParaSx}>
							Social media accounts devoted to making content here are already
							massively viral amassing hundreds of millions of views
							interviewing buyers. Each successful conversion, would make for a
							viral video and an ad set, bringing potentially thousands of new
							customers while kickstarting educating the world of the low status
							of wasteful spending now that a better alternative exists.
						</Typography>
						<Tooltip title='HTTPS' placement='left'>
							<Typography
								id='Bringing_The_Inevitable_Future_Forward'
								sx={{
									fontSize: { xs: '22px', lg_xl: '28px' },
									fontWeight: 500,
									lineHeight: { xs: '27px', lg_xl: '67px' },
									color: '#000',
									mb: '15px',
								}}
							>
								Bringing The Inevitable Future Forward
							</Typography>
						</Tooltip>
						<Typography sx={typoParaSx}>
							There’s a vibe shift underway, as we get closer and closer to a
							post scarcity economy, the eternal currency of the future of good
							karma will become more clear.
						</Typography>
						<Typography sx={typoParaSx}>
							For the greedy who still wish to hold on to ownership of something
							land is going to skyrocket as an asset, ownership on plots of
							earth will be seen as one of the steadiest investments as we
							approach a hyper decrease in the cost of building.
						</Typography>
						<Typography sx={typoParaSx}>
							The people who recognize this shift will do well to mortgage their
							house, buying a larger plot of land somewhere.
						</Typography>
						<Typography sx={typoParaSx}>
							If super-intelligence is democratic, honoring that ownership of
							land will be a decision the world makes. (Clearly the idea that
							those who hoarded their wealth and tried to hold on to value
							should have more value than those who put their wealth to work,
							giving up their assets, is one that will be a hard attempt)
							Propaganda for people to relinquish their assets to funds more of
							the poverty of the world will help the world make this decision
							when the time comes.
						</Typography>
						<Typography sx={typoParaSx}>
							While theres no specific data for what defines “Luxury” housing,
							this is of course a{' '}
							<Link
								style={{ textDecoration: 'underline', padding: '0px 5px' }}
								href='https://www.savills.com/impacts/market-trends/the-total-value-of-global-real-estate.html#:~:text=The'
							>
								far larger asset class
							</Link>
							which outshines the luxury car and luxury goods market.
						</Typography>
						<Typography sx={typoParaSx}>
							What actually makes one house better than the other (often its
							simply the status it has rather than utility) if it was all about
							utility people would buy the cheaper house and install the heated
							seat toilets, and floors etc. (but then how would people respect
							them more?). What if we were not ranked by the size of our house,
							but instead by the size of our donations.
						</Typography>
						<Typography sx={typoParaSx}>
							You may remember that app that was $999 called “Im rich” and did
							nothing. That’s what designer clothing represents today. Useless
							expense for materials with patterns that represent pure vanity.
							Pure spending power gone to pure status.
						</Typography>
						<Typography sx={typoParaSx}>
							It is tasteless…. and we believe society is not only waking up to
							that fact, but it is inevitable that we will create better
							alternatives.
						</Typography>
						<Typography sx={typoParaSx}>
							In a subjective culture sense we see IN-YOUR-FACE luxury style
							goods declining while a push for understated looks are coming
							forward. Brands such as Gucci are being seen as more
							oversaturated, and pieces that lack design besides the plastery of
							the luxury logo on the piece are seen as tacky.
						</Typography>
						<Typography sx={typoParaSx}>Evidence of this:</Typography>
						<Typography sx={typoParaSx}>
							Brands like Gucci are becoming less hip. <br></br>Designer brands
							that are in your face are not it.
						</Typography>
						<Typography sx={typoParaSx}>
							Designer that’s low-key is now the trend.
						</Typography>
						<Typography sx={typoParaSx}>
							Designer is dialing back as consumers replace spending to these
							models.
						</Typography>
						<Typography sx={typoParaSx}>
							We believe the changing of status starting at a clothing level
							will cause one of the largest wealth flow transfers towards good
							for the world. Imagine an individual who is struggling to provide
							for themselves, eventually however, they begin to thrive. They
							start a business and after having major success exit for a few
							million dollars. What is the standard look and lifestyle of this
							person after this event?
						</Typography>
						<Typography sx={typoParaSx}>
							For the most part, most people are living to keep their “social
							survival mammoth” feeling good. This is the part of the brain
							which feeds off of status, which defines our place in the social
							hierarchy. And this is not something I believe we can change,
							people WILL naturally compete to go up the chain of the social
							hierarchy, people want to outdo each other, people are
							competitive, people are different and respect should be given
							where it is due.
						</Typography>
						<Typography sx={typoParaSx}>
							This climb, this fight up the ladder is not inherently bad, whats
							wrong right now is what we consider to be markers of people who
							are higher up that ladder. We have been sold a narrative by the
							luxury and designer corporations, who have massive budgets to win
							the celebrities over, that designer and luxury clothing IS high
							status. Those who spend $4k on a designer bag versus one of
							equivalent quality for $50 are put higher on the status scale. If
							we can collectively redefine this status symbol as tacky, which
							has already been changing for in-your-face luxury design brand
							styles, we will change where the money which pays for status goes.
						</Typography>
						<Typography sx={typoParaSx}>
							While projects like Shelter NFT would build a home for a family
							who would have otherwise never had one before for the same price
							as a designer bag, it is no replacement for a BAG. People still
							want to buy a high end item, so instead, a brand which offers that
							price of bag, that level of quality, whose surplus funds goes
							towards making that positive change is perfect.
						</Typography>
						<Tooltip title='HTTPS' placement='left'>
							<Typography
								id='We_have_a_coordination_test_for_humanity'
								sx={{
									fontSize: { xs: '22px', lg_xl: '28px' },
									fontWeight: 500,
									lineHeight: { xs: '27px', lg_xl: '67px' },
									color: '#000',
									mb: '15px',
								}}
							>
								We have a coordination test for humanity.
							</Typography>
						</Tooltip>
						<Typography sx={typoParaSx}>
							If we have every individual with a self-interest approach we go
							into a terrible situation. The more we convert to love for others
							the better chance we have to pass the test.
						</Typography>
						<Box sx={{ borderLeft: '4px solid #11006c' }}>
							<blockquote>
								<Typography sx={typoblockquoteSx}>
									“If only we could make love what people optimize for over
									wealth. We can help society at large realize that is the true
									way to win the game of life” -
									<Link
										style={{ textDecoration: 'underline', padding: '0px 5px' }}
										href='https://jackjay.io/'
									>
										Jack Jay
									</Link>
								</Typography>
							</blockquote>
						</Box>
						<Typography sx={typoParaSx}>
							It wasnt until our culture defined cigarettes as bad that we quit
							them. They are just as addicting. They become negative status
							symbols. Hopefully showing the power status has on human behavior.
							If you thought sex/mating runs the world just wait till you
							realize that status is above even that.
						</Typography>
						<Typography sx={typoParaSx}>
							If we can change whats cool, then love can rule.
						</Typography>
						<Typography sx={typoParaSx}>
							If you are moved, then let’s move mountains.
						</Typography>
						<Typography sx={typoParaSx}>
							Schedule a call{' '}
							<Link
								href={'https://calendar.com/jackjay'}
								style={{ textDecoration: 'underline' }}
							>
								HERE
							</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default singlePage;

const blogBoxSx: SxProps<Theme> = {
	position: 'relative',
	width: '100%',
	height: { xs: 161, sm: 320, md: 380, lg_xl: 540, xxl_xxxl: 900 },
	justifyContent: { xs: 'space-between', md: 'flex-end' },
	backgroundColor: 'background.default',
	borderRadius: 2,
	overflow: 'hidden',
	'&::after': {
		content: "''",
		height: 1,
		width: 1,
		position: 'absolute',
		left: 0,
		top: 0,
		backgroundImage:
			'linear-gradient(180deg, rgba(0, 0, 0, 0) 30.13%, rgba(0, 0, 0, 0.78) 67.12%)',
	},
};
const blogImageBoxSx: SxProps<Theme> = {
	position: 'relative',
	width: '100%',
	// height: { xs: 161, sm: 320, md: 380, lg_xl: 540, xxl_xxxl: 900 },
	justifyContent: { xs: 'space-between', md: 'flex-end' },
	backgroundColor: 'background.default',
	borderRadius: 2,
	overflow: 'hidden',
	mb: '30px',
};
const typoParaSx: SxProps<Theme> = {
	fontSize: { xs: '14px', lg_xl: '18px' },
	fontWeight: 400,
	lineHeight: { xs: '21px', lg_xl: '27px' },
	color: '#000',
	mb: '30px',
};
const typoParaboldSx: SxProps<Theme> = {
	fontSize: { xs: '14px', lg_xl: '18px' },
	fontWeight: 'bold',
	lineHeight: { xs: '21px', lg_xl: '27px' },
	color: '#000',
	mb: '30px',
};
const typoblockquoteSx: SxProps<Theme> = {
	fontSize: { xs: '14px', lg_xl: '18px' },
	fontWeight: 500,
	lineHeight: { xs: '21px', lg_xl: '27px' },
	color: '#11006c',
	mb: '30px',
	fontStyle: 'italic',
	ml: '10px',
};
