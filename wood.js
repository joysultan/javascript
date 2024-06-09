function woodCalculator(chairquantity, tablequantity, bedquantity){
    const perChairWood = 3;
    const perTableWood = 3;
    const perBedWood = 5;

    const perChair = chairquantity * perChairWood;
    const perTable = tablequantity * perTableWood;
    const perBed = bedquantity * perBedWood;
    const totalWoodCost = perChair + perTable + perBed;
    return totalWoodCost;

}
const totalWoodCost = woodCalculator(3, 4, 5);
console.log(totalWoodCost);