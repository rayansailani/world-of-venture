import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'EV-1', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('hero')
    }
    async onAction(player: RpgPlayer) {
        const choice = await player.showChoices('Are you from UVCE?', [
            { text: 'Yes', value: 'yes' },
            { text: 'No', value: 'no' },
        ]);

        if (choice && choice.value === 'yes') {
            await player.showText('Yayyyyy!');
            // Trigger shop logic
        } else if (choice && choice.value === 'no') {
            await player.showText('Owwww, But you still get 100 Gold!');
            player.gold += 100;
            // Trigger selling logic
        }
    }
} 