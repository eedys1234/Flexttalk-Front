export default class ParticipantModel {

    constructor(participant) {
        this.participantId = participant.participant_id || participant.participantId;
        this.userEmail = participant.user_email || participant.userEmail;
        this.userProfile = participant.user_profile || participant.userProfile;
        this.isOwner = participant.is_owner || participant.isOwner;
    }

}

